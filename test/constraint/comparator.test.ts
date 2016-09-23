
import test from "ava"
import {AssertContext} from "ava"
import {strictComparator} from "../../src"

test("nullable-equal", (t: AssertContext) => {
    t.true(strictComparator.nullableEqual(null, null))
    t.false(strictComparator.nullableEqual(null, 1))
    t.false(strictComparator.nullableEqual(1, null))
})

test("strict-equal", (t: AssertContext) => {
    const ref = {}
    const otherRef = {}
    t.true(strictComparator.equal(ref, ref))
    t.false(strictComparator.equal(ref, otherRef))
    t.false(strictComparator.equal(true, 1))
})

