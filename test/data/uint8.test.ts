
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
import {isUint8, uint8Impl} from "../src"


const testedValues = [
    uint8Impl.bottom,
    0,
    uint8Impl.top
]

test("inv-bounded", boundedInv, uint8Impl)
test("inv0-comparator", comparatorInv0, uint8Impl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], uint8Impl, x)
    test("inv1-comparator", comparatorInv1, uint8Impl, x)
    test("inv1-order", [orderInv1, partOrderInv1], uint8Impl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, uint8Impl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], uint8Impl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, uint8Impl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, uint8Impl, 1)

test("isUint8", isIntM, isUint8, uint8Impl)

