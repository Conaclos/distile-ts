
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
import {isUint16, uint16Impl} from "../src"


const testedValues = [
    uint16Impl.bottom,
    0,
    uint16Impl.top
]

test("inv-bounded", boundedInv, uint16Impl)
test("inv0-comparator", comparatorInv0, uint16Impl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], uint16Impl, x)
    test("inv1-comparator", comparatorInv1, uint16Impl, x)
    test("inv1-order", [orderInv1, partOrderInv1], uint16Impl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, uint16Impl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], uint16Impl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, uint16Impl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, uint16Impl, 1)

test("isUint16", isIntM, isUint16, uint16Impl)

