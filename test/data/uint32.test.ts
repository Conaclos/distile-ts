
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
import {isUint32, uint32Impl} from "../src"


const testedValues = [
    uint32Impl.bottom,
    0,
    uint32Impl.top
]

test("inv-bounded", boundedInv, uint32Impl)
test("inv0-comparator", comparatorInv0, uint32Impl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], uint32Impl, x)
    test("inv1-comparator", comparatorInv1, uint32Impl, x)
    test("inv1-order", [orderInv1, partOrderInv1], uint32Impl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, uint32Impl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], uint32Impl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, uint32Impl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, uint32Impl, 1)

test("isUint32", isIntM, isUint32, uint32Impl)

