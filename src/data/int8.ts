
import {Bounded} from "../constraint/bounded.js"
import {Order} from "../constraint/order.js"
import {Enum, intEnum} from "../constraint/enum.js"



// Constants

const INT8_BOTTOM = - 0x7f - 1
const INT8_TOP = 0x7f


// Type

type Int8Data = number & {["@nominal-int8"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an int8?
 */
function isInt8 (n: number): n is Int8Data {
    return Number.isInteger(n) && INT8_BOTTOM <= n && n <= INT8_TOP
}


// Impl.

const int8Bounds: Bounded<number> = {
    bottom: INT8_BOTTOM,
    top: INT8_TOP
}

const int8Impl: Bounded<number> & Order<number> & Enum<number> =
    Object.assign({}, intEnum, int8Bounds)


export {
    Int8Data,
    isInt8,
    int8Bounds,
    int8Impl
}


