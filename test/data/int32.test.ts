
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
import {isInt32, int32Impl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, int32Impl, 0)
testM("inv-boundedBelow", boundedBelowInv, int32Impl, 0)
testM("inv-bounded", boundedInv, int32Impl)

testM("inv-comparator", comparatorInv, int32Impl, int32Impl.top)
testM("inv-comparator", comparatorInv, int32Impl, int32Impl.bottom)

testM("inv-enum", enumInv, int32Impl, -1)
testM("inv-enum", enumInv, int32Impl, 0)
testM("inv-enum", enumInv, int32Impl, 1)

testM("inv-order", orderInv, int32Impl,
    int32Impl.top, int32Impl.bottom)

testM("isInt32", isIntM, isInt32, int32Impl)

