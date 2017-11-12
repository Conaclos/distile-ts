
import test from "ava"
import {AssertContext} from "ava"
import {
    comparatorInv0,
    comparatorInv1,
    comparatorInv2
} from "../macro"
import {strictComparator} from "../src"


test("strict-equal-inv", [
        comparatorInv0,
        comparatorInv1,
        comparatorInv2
    ], strictComparator, 1, 2)

test("strict-equal", (t: AssertContext) => {
    const ref = {}
    const otherRef = {}
    t.true(strictComparator.equal(ref, ref))
    t.false(strictComparator.equal(ref, otherRef))
    t.false(strictComparator.equal(true, 1))
})

