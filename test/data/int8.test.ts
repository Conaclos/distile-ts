
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
import {isInt8, int8Impl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, int8Impl, 0)
testM("inv-boundedBelow", boundedBelowInv, int8Impl, 0)
testM("inv-bounded", boundedInv, int8Impl)

testM("inv-comparator", comparatorInv, int8Impl, int8Impl.top)
testM("inv-comparator", comparatorInv, int8Impl, int8Impl.bottom)

testM("inv-enum", enumInv, int8Impl, -1)
testM("inv-enum", enumInv, int8Impl, 0)
testM("inv-enum", enumInv, int8Impl, 1)

testM("inv-order", orderInv, int8Impl,
    int8Impl.top, int8Impl.bottom)

testM("isInt8", isIntM, isInt8, int8Impl)

