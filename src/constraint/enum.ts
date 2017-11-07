
import {Comparator} from "./comparator.js"
import {Order, intOrder} from "./order.js"
import {Bounded} from "./bounded.js"


/**
 * Define operation on enumerable types.
 */
interface Enum <T> {

// Status
    /**
     * @param a
     * @return Has `a` a predecessor?
     */
    hasPredecessor: (a: T) => boolean

    /**
     * @param a
     * @return Has `a` a successor?
     */
    hasSuccessor: (a: T) => boolean

// Access
    /**
     * @param a
     * @return Element preceding `a` if any.
     */
    predecessor: (a: T) => T

    /**
     * @param a
     * @return Element succeding `a` if any.
     */
    successor: (a: T) => T

}


/**
 * Partial impl. for all finite enum.
 */
const finiteEnum = {

    hasPredecessor <T> (this: Bounded<T> & Comparator<T>, n: T): boolean {
        return ! this.equal(n, this.bottom)
    },

    hasSuccessor <T> (this: Bounded<T> & Comparator<T>, n: T): boolean {
        return ! this.equal(n, this.top)
    }

}

/**
 * Partial impl. for all infinite enum.
 */
const infiniteEnum = {

    hasPredecessor <T> (this: Object, n: T): boolean {
        return true
    },

    hasSuccessor <T> (this: Object, n: T): boolean {
        return true
    }

}

/**
 * Impl. for any int types.
 */
const intEnum: Enum<number> & Order<number> = {

    ...intOrder,
    ...finiteEnum,

    predecessor (this: Bounded<number> & Enum<number>, n: number): number {
        console.assert(this.hasPredecessor(n),
            "require: `n' has a predecessor. n = ", n)
        return n - 1
    },

    successor (this: Bounded<number> & Enum<number>, n: number): number {
        console.assert(this.hasSuccessor(n),
            "require: `n' has a successor. n = ", n)
        return n + 1
    }

}

/**
 * Impl. of an infinite enum for any int types (bounded types).
 */
const intCyclicEnum: Enum<number> & Order<number> = {

    ...intOrder,
    ...infiniteEnum,

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
    finiteEnum,
    infiniteEnum,
    intEnum,
    intCyclicEnum
}

