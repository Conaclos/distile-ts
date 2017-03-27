
import {Order, intOrder} from "./order.js"
import {Bounded} from "./bounded.js"


/**
 * Define operation on enumerable types.
 */
interface Enum <T> {

    /**
     * @param a
     * @return Element preceding `a` or `a` if none.
     */
    predecessor (a: T): T

    /**
     * @param a
     * @return Element succeding `a` or `a` if none.
     */
    successor (a: T): T

}


/**
 * Impl. for any int types.
 */
const intEnum: Enum<number> & Order<number> = {

    ...intOrder,

    predecessor (this: Bounded<number>, n: number): number {
        console.assert(n > this.bottom,
            "require: `n' is greater than `bottom'. n = ", n,
            "bottom = ", this.bottom)
        return n - 1
    },

    successor (this: Bounded<number>, n: number): number {
        console.assert(n < this.top,
            "require: `n' is lower than `top'. n = ", n,
            "top = ", this.top)
        return n + 1
    }

}

/**
 * Impl. of an infinite enum for any int types (bounded types).
 */
const intCyclicEnum: Enum<number> & Order<number> = {

    ...intOrder,

    predecessor (this: Bounded<number>, n: number): number {
        if (n === this.bottom) {
            return this.top
        } else {
            return n - 1
        }
    },

    successor (this: Bounded<number>, n: number): number {
        if (n === this.top) {
            return this.bottom
        } else {
            return n + 1
        }
    }

}


export {
    Enum,
    intEnum,
    intCyclicEnum
}

