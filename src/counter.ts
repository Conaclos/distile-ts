
import {TypeableArray, TypeableArrayConstructor} from "typeable-array"

import {Bounded, BoundedBelow} from "./constraint/bounded.js"
import {Comparator} from "./constraint/comparator.js"
import {Enum} from "./constraint/enum.js"
import {Order, Ordering, compareBasedOrder} from "./constraint/order.js"


type CounterData<T> = TypeableArray<T>

interface Counter <T>
    extends Order<CounterData<T>>,
            BoundedBelow<CounterData<T>>,
            Enum<CounterData<T>> {

    readonly _arrayFactory: TypeableArrayConstructor<T>

    readonly _util: Enum<T> & Bounded<T> & Order<T>

}


// Part impl.

const counterPartImpl = {

    ...compareBasedOrder,

    compare <T> (this: Counter<T>,
            a: CounterData<T>, b: CounterData<T>): Ordering {

        if (a === b) {
            return Ordering.Equal
        } else {
            const aLength = a.length
            const bLength = b.length
            const util = this._util

            if (aLength === bLength) {
                let i = 0
                while (i !== aLength && util.equal(a[i], b[i])) {
                    i++
                }

                if (i === aLength) {
                    return Ordering.Equal
                } else if (util.less(a[i], b[i])) {
                    return Ordering.Less
                } else {
                    return Ordering.Greater
                }
            } else if (aLength < bLength) {
                return Ordering.Less
            } else {
                return Ordering.Greater
            }
        }
    },

    hasPredecessor <T> (this: Counter<T>, aRef: CounterData<T>): boolean {
        return aRef.length > 0
    },

    hasSuccessor <T> (this: Counter<T>, aRef: CounterData<T>): boolean {
        return true
    },

    predecessor <T> (this: Counter<T>, aRef: CounterData<T>): CounterData<T> {
        console.assert(this.hasPredecessor(aRef),
            "require: aRef has a predecessor. aRef = ", aRef)

        const length = aRef.length
        const util = this._util
        const bottom = util.bottom

        let i = length - 1
        while (i >= 0 && util.equal(aRef[i], bottom)) {
            i--
        }

        let result: TypeableArray<T>
        if (i < 0) {
            // All values are equal to util.bottom

            result = new this._arrayFactory(length - 1)
            result.fill(util.top)
        } else {
            result = aRef.slice()
            result[i] = util.predecessor(result[i])
            result.fill(util.top, i + 1)
        }
        return result
    },

    successor <T> (this: Counter<T>, aRef: CounterData<T>): CounterData<T> {
        const length = aRef.length
        const util = this._util
        const top = util.top

        let i = length - 1
        while (i >= 0 && util.equal(aRef[i], top)) {
            i--
        }

        let result: TypeableArray<T>
        if (i < 0) {
            // All values are equal to util.top

            result = new this._arrayFactory(length + 1)
            if (result[0] !== util.bottom) {
                result.fill(util.bottom)
            }
        } else {
            result = aRef.slice()
            result[i] = util.successor(result[i])
            result.fill(util.bottom, i + 1)
        }
        return result
    }

}


// Creators

function makeCounter <T> (this: void, aUtil: Enum<T> & Bounded<T> & Order<T>,
        aArrayFactory: TypeableArrayConstructor<T>): Counter<T> {

    return {
        ...counterPartImpl,

        _util: aUtil,
        _arrayFactory: aArrayFactory,
        bottom: new aArrayFactory(0)
    }
}


export {
    CounterData,
    Counter,
    counterPartImpl,
    makeCounter
}

