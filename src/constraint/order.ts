
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
 * Define comparison operations on partially ordered types.
 */
interface PartOrder <T> extends Comparator<T> {

    /**
     * @param a
     * @param b
     * @return Ordering between 'a' and 'b' or undefined if unrelated?
     */
    compare: (a: T, b: T) => Ordering | undefined

    /**
     * @param a
     * @param b
     * @return Is 'a' less than 'b'?
     */
    less: (a: T, b: T) => boolean

    /**
     * @param a
     * @param b
     * @return Is 'a' less than or equal to 'b'?
     */
    lessEqual: (a: T, b: T) => boolean

    /**
     * @param a
     * @param b
     * @return Is 'a' greater than 'b'?
     */
    greater: (a: T, b: T) => boolean

    /**
     * @param a
     * @param b
     * @return Is 'a' greater than or equal to 'b'?
     */
    greaterEqual: (a: T, b: T) => boolean

    /**
     * @param a
     * @param b
     * @return Is there an order between 'a' and 'b'?
     */
    related: (a: T, b: T) => boolean

}

/**
 * Define comparison operations on totally ordered types.
 */
interface Order <T> extends PartOrder<T> {

    /**
     * @param a
     * @param b
     * @return Ordering between 'a' and 'b'?
     */
    compare: (a: T, b: T) => Ordering

    /**
     * @param a
     * @param b
     * @return 'a' if 'a' is less than 'b' else 'b'
     */
    min: <U extends T, V extends T> (a: U, b: V) => U | V

    /**
     * @param a
     * @param b
     * @return 'a' if 'a' is greater than 'b' else 'b'
     */
    max: <U extends T, V extends T> (a: U, b: V) => U | V

    /**
     * @param a
     * @param b
     * @return 'a' and 'b' are always related.
     */
    related: (a: T, b: T) => true

}

/**
 * Partial impl. based on `compare'.
 */
const compareBasedPartOrder = {

    ...equalBasedComparator,

    equal <T> (this: PartOrder<T>, a: T, b: T): boolean {
        return this.compare(a, b) === Ordering.Equal
    },

    less <T> (this: PartOrder<T>, a: T, b: T): boolean {
        return this.compare(a, b) === Ordering.Less
    },

    lessEqual <T> (this: PartOrder<T>, a: T, b: T): boolean {
        const ord = this.compare(a, b)
        return ord === Ordering.Less || ord === Ordering.Equal
    },

    greater <T> (this: PartOrder<T>, a: T, b: T): boolean {
        return this.compare(a, b) === Ordering.Greater
    },

    greaterEqual <T> (this: PartOrder<T>, a: T, b: T): boolean {
        const ord = this.compare(a, b)
        return ord === Ordering.Greater || ord === Ordering.Equal
    },

    related <T> (this: PartOrder<T>, a: T, b: T): boolean {
        return this.compare(a, b) !== undefined
    }

}

const compareBasedOrder = {

    ...compareBasedPartOrder,

    lessEqual <T> (this: Order<T>, a: T, b: T): boolean {
        return this.compare(a, b) !== Ordering.Greater
    },

    greaterEqual <T> (this: Order<T>, a: T, b: T): boolean {
        return this.compare(a, b) !== Ordering.Less
    },

    min <T, U extends T, V extends T> (this: Order<T>, a: U, b: V): U | V {
        if (this.less(a, b)) {
            return a
        } else {
            return b
        }
    },

    max <T, U extends T, V extends T> (this: Order<T>, a: U, b: V): U | V {
        if (this.less(a, b)) {
            return b
        } else {
            return a
        }
    },

    related <T> (this: Order<T>, a: T, b: T): true {
        return true
    }

}

/**
 * Impl. for boolean type.
 * false < true
 */
const booleanOrder: Order<boolean> = {

    ...compareBasedOrder,

    compare (a: boolean, b: boolean): Ordering {
        if (a === b) {
            return Ordering.Equal
        } else if (a) {
            return Ordering.Greater
        } else {
            return Ordering.Less
        }
    }

}

/**
 * Impl. for any int types.
 * Natural order: ... < -1 < 0 < 1 < ...
 */
const intOrder: Order<number> = {

    ...compareBasedOrder,

    compare (a: number, b: number): Ordering {
        if (a < b) {
            return Ordering.Less
        } else if (a > b) {
            return Ordering.Greater
        } else {
            return Ordering.Equal
        }
    }

}

/**
 * Impl. for any characters.
 * Natural order of UTF-16 char codes.
 */
const charOrder: Order<string> = {

    ...compareBasedOrder,

    compare (a: string, b: string): Ordering {
        console.assert(a.length === 1)
        console.assert(b.length === 1)

        return intOrder.compare(a.charCodeAt(0), b.charCodeAt(0))
    }

}


export {
    Ordering,
    PartOrder,
    Order,
    compareBasedPartOrder,
    compareBasedOrder,
    booleanOrder,
    intOrder,
    charOrder
}

