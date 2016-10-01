
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv,
    enumInv,
    isIntM,
    orderInv
} from "../../test-macro"
import {isUint8, uint8Impl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, uint8Impl, 0)
testM("inv-boundedBelow", boundedBelowInv, uint8Impl, 0)
testM("inv-bounded", boundedInv, uint8Impl)

testM("inv-comparator", comparatorInv, uint8Impl, uint8Impl.top)
testM("inv-comparator", comparatorInv, uint8Impl, uint8Impl.bottom)

testM("inv-enum", enumInv, uint8Impl, 1)

testM("inv-order", orderInv, uint8Impl,
    uint8Impl.top, uint8Impl.bottom)

testM("isUint8", isIntM, isUint8, uint8Impl)

