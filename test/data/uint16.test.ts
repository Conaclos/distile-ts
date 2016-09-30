
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv,
    enumInv,
    orderInv
} from "../../test-macro"
import {isUint16, uint16Impl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, uint16Impl, 0)
testM("inv-boundedBelow", boundedBelowInv, uint16Impl, 0)
testM("inv-bounded", boundedInv, uint16Impl)

testM("inv-comparator", comparatorInv, uint16Impl, uint16Impl.top)
testM("inv-comparator", comparatorInv, uint16Impl, uint16Impl.bottom)

testM("inv-enum", enumInv, uint16Impl, 1)

testM("inv-order", orderInv, uint16Impl,
    uint16Impl.top, uint16Impl.bottom)

test("isUint16", (t: AssertContext) => {
    t.true(isUint16(uint16Impl.bottom))
    t.true(isUint16(uint16Impl.top))

    t.true(isUint16(0))
    t.true(isUint16(1))
})

