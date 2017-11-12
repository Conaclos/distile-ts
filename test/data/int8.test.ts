
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
import {isInt8, int8Impl} from "../src"


const testedValues = [
    int8Impl.bottom,
    0,
    int8Impl.top
]

test("inv-bounded", boundedInv, int8Impl)
test("inv0-comparator", comparatorInv0, int8Impl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], int8Impl, x)
    test("inv1-comparator", comparatorInv1, int8Impl, x)
    test("inv1-order", [orderInv1, partOrderInv1], int8Impl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, int8Impl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], int8Impl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, int8Impl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, int8Impl, -1)
test("inv-enum", enumInv, int8Impl, 0)
test("inv-enum", enumInv, int8Impl, 1)

test("isInt8", isIntM, isInt8, int8Impl)

