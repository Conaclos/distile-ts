
import {join} from "./helper/join.js"
import {Comparator, equalBasedComparator} from "./comparator.js"

/**
 * Possible relation between two elements in a totally ordered set.
 */
const enum Ordering {
    Less = -1,
    Equal = 0,
    Greater = 1
}

/**
 * Total order
 */
interface Order <T> extends Comparator<T> {

    /**
     * @param a
     * @param b
     * @return Ordering between 'a' and 'b'?
     */
    compare (a: T, b: T): Ordering

    /**
     * @param a
     * @param b
     * @return Is 'a' less than 'b'?
     */
    less (a: T, b: T): boolean

    /**
     * @param a
     * @param b
     * @return Is 'a' less than or equal to 'b'?
     */
    lessEqual (a: T, b: T): boolean

    /**
     * @param a
     * @param b
     * @return Is 'a' greater than 'b'?
     */
    greater (a: T, b: T): boolean

    /**
     * @param a
     * @param b
     * @return Is 'a' greater than or equal to 'b'?
     */
    greaterEqual (a: T, b: T): boolean

    /**
     * @param a
     * @param b
     * @return 'a' if 'a' is less than 'b' else 'b'
     */
    min (a: T, b: T): T

    /**
     * @param a
     * @param b
     * @return 'a' if 'a' is greater than 'b' else 'b'
     */
    max (a: T, b: T): T

}


/**
 * Total order
 */
const compareBasedOrder = join({

    equal <T> (this: Order<T>, a: T, b: T) {
        return this.compare(a, b) === Ordering.Equal
    },

    less <T> (this: Order<T>, a: T, b: T): boolean {
        return this.compare(a, b) === Ordering.Less
    },

    lessEqual <T> (this: Order<T>, a: T, b: T): boolean {
        return this.compare(a, b) !== Ordering.Greater
    },

    greater <T> (this: Order<T>, a: T, b: T): boolean {
        return this.less(b, a)
    },

    greaterEqual <T> (this: Order<T>, a: T, b: T): boolean {
        return this.compare(a, b) !== Ordering.Less
    },

    min <T> (this: Order<T>, a: T, b: T): T {
        if (this.less(a, b)) {
            return a
        } else {
            return b
        }
    },

    max <T> (this: Order<T>, a: T, b: T): T {
        if (this.less(a, b)) {
            return b
        } else {
            return a
        }
    }

}, equalBasedComparator)


// Signed and unsigned integers

const intOrder: Order<number> = join({
    compare (a: number, b: number): Ordering {
        if (a < b) {
            return Ordering.Less
        } else if (a === b) {
            return Ordering.Equal
        } else {
            return Ordering.Greater
        }
    }
}, compareBasedOrder)


// Char

const charOrder: Order<string> = join({
    compare (a: string, b: string): Ordering {
        console.assert(a.length === 1)
        console.assert(b.length === 1)

        return intOrder.compare(a.charCodeAt(0), b.charCodeAt(0))
    }
}, compareBasedOrder)


export {
    Ordering,
    Order,
    compareBasedOrder,
    intOrder,
    charOrder
}

