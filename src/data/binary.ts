
import {Bounded} from "../constraint/bounded.js"
import {Order, Ordering, compareBasedOrder} from "../constraint/order.js"
import {Enum, infiniteEnum} from "../constraint/enum.js"


// Constants

const BINARY_BOTTOM = false
const BINARY_TOP = true


// Impl.

const binaryImpl: Bounded<boolean> & Order<boolean> & Enum<boolean> = {

    ...compareBasedOrder,
    ...infiniteEnum,

    bottom: BINARY_BOTTOM,
    top: BINARY_TOP,

    compare (a: boolean, b: boolean): Ordering {
        if (a === b) {
            return Ordering.Equal
        } else if (b) {
            return Ordering.Less
        } else {
            return Ordering.Greater
        }
    },

    predecessor (a: boolean): boolean {
        console.assert(a)
        return false
    },

    successor (a: boolean): boolean {
        console.assert(! a)
        return true
    }

}


export {
    binaryImpl,
    BINARY_BOTTOM,
    BINARY_TOP
}

