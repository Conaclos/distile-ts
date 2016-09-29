
import {AssertContext} from "ava"
import {Comparator} from "../../src"

function comparatorInv <T> (t: AssertContext, u: Comparator<T>, a: T): void {
    t.true(u.nullableEqual(null, null))
    t.false(u.nullableEqual(null, a))
    t.false(u.nullableEqual(a, null))
}

export {comparatorInv}

