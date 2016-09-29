
import test from "ava"
import {AssertContext} from "ava"
import {comparatorInv} from "../../test-macro"
import {strictComparator} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("strict-equal-inv", comparatorInv, strictComparator, 1)

test("strict-equal", (t: AssertContext) => {
    const ref = {}
    const otherRef = {}
    t.true(strictComparator.equal(ref, ref))
    t.false(strictComparator.equal(ref, otherRef))
    t.false(strictComparator.equal(true, 1))
})

