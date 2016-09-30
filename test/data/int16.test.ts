
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
import {isInt16, int16Impl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, int16Impl, 0)
testM("inv-boundedBelow", boundedBelowInv, int16Impl, 0)
testM("inv-bounded", boundedInv, int16Impl)

testM("inv-comparator", comparatorInv, int16Impl, int16Impl.top)
testM("inv-comparator", comparatorInv, int16Impl, int16Impl.bottom)

testM("inv-enum", enumInv, int16Impl, -1)
testM("inv-enum", enumInv, int16Impl, 0)
testM("inv-enum", enumInv, int16Impl, 1)

testM("inv-order", orderInv, int16Impl,
    int16Impl.top, int16Impl.bottom)

test("isInt16", (t: AssertContext) => {
    t.true(isInt16(int16Impl.bottom))
    t.true(isInt16(int16Impl.top))

    t.true(isInt16(-1))
    t.true(isInt16(0))
    t.true(isInt16(1))
})

