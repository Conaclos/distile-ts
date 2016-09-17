
import {join} from "../helper/join.js"
import {Order, intOrder} from "./order.js"
import {Bounded} from "./bounded.js"


/**
 *
 */
interface Enum <T> {

    /**
     * @param a
     * @return Element preceding `a` or null if none.
     */
    predecessor (a: T): T

    /**
     * @param a
     * @return Element succeding `a` or null if none.
     */
    successor (a: T): T

}


// Part impl.

/**
 * Signed and unsigned integers
 */
const intEnum: Enum<number> & Order<number> = join({

    predecessor (this: Bounded<number>, n: number): number {
        return n - 1
    },

    successor (this: Bounded<number>, n: number): number {
        return n + 1
    }

}, intOrder)


const intCyclicEnum: Enum<number> & Order<number> = join({

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

}, intOrder)


export {
    Enum,
    intEnum,
    intCyclicEnum
}

