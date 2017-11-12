
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
import {isInt16, int16Impl} from "../src"


const testedValues = [
    int16Impl.bottom,
    0,
    int16Impl.top
]

test("inv-bounded", boundedInv, int16Impl)
test("inv0-comparator", comparatorInv0, int16Impl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], int16Impl, x)
    test("inv1-comparator", comparatorInv1, int16Impl, x)
    test("inv1-order", [orderInv1, partOrderInv1], int16Impl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, int16Impl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], int16Impl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, int16Impl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, int16Impl, -1)
test("inv-enum", enumInv, int16Impl, 0)
test("inv-enum", enumInv, int16Impl, 1)

test("isInt16", isIntM, isInt16, int16Impl)

