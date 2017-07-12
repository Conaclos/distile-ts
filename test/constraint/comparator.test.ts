
import test from "ava"
import {AssertContext} from "ava"
import {comparatorInv} from "../macro"
import {strictComparator} from "../src"


test("strict-equal-inv", comparatorInv, strictComparator, 1)

test("strict-equal", (t: AssertContext) => {
    const ref = {}
    const otherRef = {}
    t.true(strictComparator.equal(ref, ref))
    t.false(strictComparator.equal(ref, otherRef))
    t.false(strictComparator.equal(true, 1))
})

