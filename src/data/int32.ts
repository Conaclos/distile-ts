
import {Bounded} from "../constraint/bounded.js"
import {Order} from "../constraint/order.js"
import {Enum, intEnum} from "../constraint/enum.js"


// Constants

const INT32_BOTTOM = - 0x7fffffff - 1
const INT32_TOP = 0x7fffffff


// Type

type Int32Data = number & {["@nominal-int32"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an int32?
 */
function isInt32 (n: number): n is Int32Data {
    return Number.isInteger(n) && INT32_BOTTOM <= n && n <= INT32_TOP
}


// Impl.

const int32Bounds: Bounded<number> = {
    bottom: INT32_BOTTOM,
    top: INT32_TOP
}

const int32Impl: Bounded<number> & Order<number> & Enum<number> = {
    ...intEnum,
    ...int32Bounds
}


export {
    Int32Data,
    isInt32,
    int32Bounds,
    int32Impl
}

