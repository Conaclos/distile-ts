
import {join} from '../helper/join.js'


interface Comparator <T> {

    /**
     * @param a
     * @param b
     * @return Are 'a' and 'b' equal?
     */
    equal (a: T, b: T): boolean

    nullableEqual (a: T | null, b: T | null): boolean

}

// Partial impl.

const equalBasedComparator = {

    nullableEqual <T> (this: Comparator<T>, a: T | null, b: T | null): boolean {
        if (a === null) {
            return b === null
        } else {
            return b !== null && this.equal(a, b)
        }
    }

}


// Full impl.

const strictComparator: Comparator<any> = join({

    equal (a: any, b: any) {
        return a === b
    }

}, equalBasedComparator)


export {
    Comparator,
    equalBasedComparator,
    strictComparator
}

