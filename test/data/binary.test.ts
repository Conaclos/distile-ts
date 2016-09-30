
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedInv,
    comparatorInv,
    orderInv
} from "../../test-macro"
import {binaryImpl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-comparator", comparatorInv, binaryImpl, true)
testM("inv-comparator", comparatorInv, binaryImpl, false)

test("inv-enum", (t: AssertContext) => {
    t.is(binaryImpl.predecessor(true), false)
    t.is(binaryImpl.successor(false), true)
})

testM("inv-order", orderInv, binaryImpl, true, false)

