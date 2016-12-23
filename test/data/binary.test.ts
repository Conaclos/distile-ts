
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedInv,
    comparatorInv,
    orderInv
} from "../../test-macro"
import {binaryImpl} from "../../src"


test("inv-comparator", comparatorInv, binaryImpl, true)
test("inv-comparator", comparatorInv, binaryImpl, false)

test("inv-enum", (t: AssertContext) => {
    t.is(binaryImpl.predecessor(true), false)
    t.is(binaryImpl.successor(false), true)
})

test("inv-order", orderInv, binaryImpl, true, false)

