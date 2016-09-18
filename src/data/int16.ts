
import {Bounded} from "../constraint/bounded.js"
import {Order} from "../constraint/order.js"
import {Enum, intEnum} from "../constraint/enum.js"


// Constants

const INT16_BOTTOM = - 0x7fff - 1
const INT16_TOP = 0x7fff


// Type

type Int16Data = number & {["@nominal-int16"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an int16?
 */
function isInt16 (n: number): n is Int16Data {
    return Number.isInteger(n) && INT16_BOTTOM <= n && n <= INT16_TOP
}


// Impl.

const int16Bounds: Bounded<number> = {
    bottom: INT16_BOTTOM,
    top: INT16_TOP
}

const int16Impl: Bounded<number> & Order<number> & Enum<number> =
    Object.assign({}, intEnum, int16Bounds)


export {
    Int16Data,
    isInt16,
    int16Bounds,
    int16Impl
}

