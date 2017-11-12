
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedInv,
    comparatorInv0,
    comparatorInv1,
    comparatorInv2,
    orderInv1,
    partOrderInv1,
    orderInv2,
    partOrderInv2,
    partOrderInv3
} from "../macro"
import {binaryImpl} from "../src"


test("inv0-comparator", comparatorInv0, binaryImpl)

for (const x of [false, true]) {
    test([comparatorInv1, orderInv1, partOrderInv1], binaryImpl, x)

    test([comparatorInv2, orderInv2, partOrderInv2], binaryImpl, x, !x)

    test("inv3-partorder", partOrderInv3, binaryImpl, x, x, !x)
}

test("inv-enum", (t: AssertContext) => {
    t.is(binaryImpl.predecessor(true), false)
    t.is(binaryImpl.successor(false), true)
})

