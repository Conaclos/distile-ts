
import {AssertContext} from "ava"
import {Comparator} from "../src"

function comparatorInv0 <T> (t: AssertContext, u: Comparator<T>): void {
    t.true(u.nullableEqual(null, null), "null transparent reference")
}

function comparatorInv1 <T> (t: AssertContext, u: Comparator<T>, a: T): void {
    t.false(u.nullableEqual(null, a))
    t.false(u.nullableEqual(a, null))

    t.true(u.equal(a, a))
    t.true(u.nullableEqual(a, a))
}

function comparatorInv2 <T>
    (t: AssertContext, u: Comparator<T>, a: T, b: T): void {

    t.is(u.equal(a, b), u.equal(b, a), "commutativity")
}

export {comparatorInv0, comparatorInv1, comparatorInv2}

