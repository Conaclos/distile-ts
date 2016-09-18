
import {Bounded} from "../constraint/bounded.js"
import {Order} from "../constraint/order.js"
import {Enum, intEnum} from "../constraint/enum.js"



// Constants

const UINT16_BOTTOM = 0
const UINT16_TOP = 0xffff


// Type

type Uint16Data = number & {["@nominal-uint16"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an uint16?
 */
function isUint16 (n: number): n is Uint16Data {
    return Number.isInteger(n) && UINT16_BOTTOM <= n && n <= UINT16_TOP
}


// Impl.

const uint16Bounds: Bounded<number> = {
    bottom: UINT16_BOTTOM,
    top: UINT16_TOP
}

const uint16Impl: Bounded<number> & Order<number> & Enum<number> =
    Object.assign({}, intEnum, uint16Bounds)


export {
    Uint16Data,
    isUint16,
    uint16Bounds,
    uint16Impl
}

