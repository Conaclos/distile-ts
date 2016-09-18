
import {join} from "../helper/join.js"
import {Bounded} from "../constraint/bounded.js"
import {Order, Ordering, compareBasedOrder} from "../constraint/order.js"


// Impl.

const numberBounds: Bounded<number> = {
    bottom: Number.MIN_VALUE,
    top: Number.MAX_VALUE
}

const numberImpl: Bounded<number> & Order<number> = join({

    compare (a: number, b: number): Ordering {
        const signA = Math.sign(a)
        const signB = Math.sign(b)

        if (signA === signB) {
            if (Math.abs(a - b) < Number.EPSILON) {
                return Ordering.Equal
            } else if (a < b) {
                return Ordering.Less
            } else {
                return Ordering.Greater
            }
        } else {
            if (Math.sign(a - signA * Number.EPSILON) !== signA &&
                Math.sign(b - signB * Number.EPSILON) !== signB) {

                return Ordering.Equal
            } else if (signA === -1 || signB === 1) {
                return Ordering.Less
            } else {
                return Ordering.Greater
            }
        }
    }

}, compareBasedOrder, numberBounds)

export {
    numberBounds,
    numberImpl
}

