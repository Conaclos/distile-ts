
import {join} from "../helper/join.js"
import {Bounded} from "../bounded.js"
import {Order} from "../order.js"
import {Enum, intEnum} from "../enum.js"


// Constants

const SAFE_INT_BOTTOM = Number.MIN_SAFE_INTEGER
const SAFE_INT_TOP = Number.MAX_SAFE_INTEGER


// Type

type SafeIntData = number & {["@nominal-safeInt"]: undefined}

/**
 * @param n
 * @return Is `n' convertible to an safeInt?
 */
function isSafeInt (n: number): n is SafeIntData {
    return Number.isInteger(n) && SAFE_INT_BOTTOM <= n && n <= SAFE_INT_TOP
}


// Impl.

const safeIntBounds: Bounded<number> = {
    bottom: SAFE_INT_BOTTOM,
    top: SAFE_INT_TOP
}

const safeIntImpl: Bounded<number> & Order<number> & Enum<number> =
    join(intEnum, safeIntBounds)


export {
    SafeIntData,
    isSafeInt,
    safeIntBounds,
    safeIntImpl
}

