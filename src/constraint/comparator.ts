
/**
 * Define equality on types.
 */
interface Comparator <T> {

    /**
     * @param a
     * @param b
     * @return Are 'a' and 'b' equal?
     */
    equal (a: T, b: T): boolean

    nullableEqual (a: T | null | undefined, b: T | null | undefined): boolean

}


/**
 * Partial impl. based on `equal'
 */
const equalBasedComparator = {

    nullableEqual <T> (this: Comparator<T>,
        a: T | null | undefined, b: T | null | undefined): boolean {

        if (a == null) {
            return b == null
        } else {
            return b != null && this.equal(a, b)
        }
    }

}

/**
 * Impl. of strict comparison
 */
const strictComparator: Comparator<Object | null | undefined> = {

    ...equalBasedComparator,

    equal (a: Object | null | undefined, b: Object | null | undefined): boolean {
        return a === b
    }

}


export {
    Comparator,
    equalBasedComparator,
    strictComparator
}

