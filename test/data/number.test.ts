
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedAboveInv,
    boundedBelowInv,
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
import {numberImpl} from "../src"


const testedValues = [
    numberImpl.bottom,
    - Number.EPSILON / 2,
    0,
    Number.EPSILON / 2,
    numberImpl.top
]


test("inv-bounded", boundedInv, numberImpl)
test("inv0-comparator", comparatorInv0, numberImpl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], numberImpl, x)
    test("inv1-comparator", comparatorInv1, numberImpl, x)
    test("inv1-order", [orderInv1, partOrderInv1], numberImpl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, numberImpl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], numberImpl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, numberImpl, x, y, z)
                }
            }
        }
    }
}
