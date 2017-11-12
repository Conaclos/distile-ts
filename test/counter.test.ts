
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedBelowInv,
    comparatorInv0,
    comparatorInv1,
    comparatorInv2,
    enumInv,
    orderInv1,
    partOrderInv1,
    orderInv2,
    partOrderInv2,
    partOrderInv3
} from "./macro"
import {Counter, CounterData, uint8Impl, makeCounter} from "./src"


const uint8CounterImpl: Counter<number> = makeCounter(uint8Impl, Uint8Array)
const c1 = Uint8Array.of(uint8Impl.top)
const c2 = Uint8Array.of(uint8Impl.top, uint8Impl.top)
const c3 = Uint8Array.of(uint8Impl.top, uint8Impl.bottom)
const testedValues = [c1, c2, c3]


test("inv0-comparator", comparatorInv0, uint8CounterImpl)

for (const x of testedValues) {
    test("inv1-bounded-below", boundedBelowInv, uint8CounterImpl, x)
    test("inv1-comparator", comparatorInv1, uint8CounterImpl, x)
    test("inv1-order", [orderInv1, partOrderInv1], uint8CounterImpl, x)
    test("inv1-enum", enumInv, uint8CounterImpl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test("inv2-comparator", comparatorInv2, uint8CounterImpl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], uint8CounterImpl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, uint8CounterImpl, x, y, z)
                }
            }
        }
    }
}


