
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv0,
    comparatorInv1,
    comparatorInv2,
    enumInv,
    isIntM,
    orderInv1,
    partOrderInv1,
    orderInv2,
    partOrderInv2,
    partOrderInv3
} from "../macro"
import {isSafeInt, safeIntImpl} from "../src"


const testedValues = [
    safeIntImpl.bottom,
    0,
    safeIntImpl.top
]

test("inv-bounded", boundedInv, safeIntImpl)
test("inv0-comparator", comparatorInv0, safeIntImpl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], safeIntImpl, x)
    test("inv1-comparator", comparatorInv1, safeIntImpl, x)
    test("inv1-order", [orderInv1, partOrderInv1], safeIntImpl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, safeIntImpl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], safeIntImpl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, safeIntImpl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, safeIntImpl, -1)
test("inv-enum", enumInv, safeIntImpl, 0)
test("inv-enum", enumInv, safeIntImpl, 1)

test("issafeInt", isIntM, isSafeInt, safeIntImpl)

