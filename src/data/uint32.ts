
import {Bounded} from "../constraint/bounded.js"
import {Order} from "../constraint/order.js"
import {Enum, intEnum} from "../constraint/enum.js"



// Constants

const UINT32_BOTTOM = 0
const UINT32_TOP = 0xffffffff


// Type

type Uint32Data = number & {["@nominal-uint32"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an uint32?
 */
function isUint32 (n: number): n is Uint32Data {
    return Number.isInteger(n) && UINT32_BOTTOM <= n && n <= UINT32_TOP
}


// Impl.

const uint32Bounds: Bounded<number> = {
    bottom: UINT32_BOTTOM,
    top: UINT32_TOP
}

const uint32Impl: Bounded<number> & Order<number> & Enum<number> = {
    ...intEnum,
    ...uint32Bounds
}


export {
    Uint32Data,
    isUint32,
    uint32Bounds,
    uint32Impl
}

