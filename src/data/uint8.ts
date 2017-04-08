
import {Bounded} from "../constraint/bounded.js"
import {Order} from "../constraint/order.js"
import {Enum, intEnum} from "../constraint/enum.js"



// Constants

const UINT8_BOTTOM = 0
const UINT8_TOP = 0xff


// Type

type Uint8Data = number & {["@nominal-uint8"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an uint8?
 */
function isUint8 (n: number): n is Uint8Data {
    return Number.isInteger(n) && UINT8_BOTTOM <= n && n <= UINT8_TOP
}


// Impl.

const uint8Bounds: Bounded<number> = {
    bottom: UINT8_BOTTOM,
    top: UINT8_TOP
}

const uint8Impl: Bounded<number> & Order<number> & Enum<number> = {
    ...intEnum,
    ...uint8Bounds
}


export {
    Uint8Data,
    isUint8,
    uint8Bounds,
    uint8Impl
}

