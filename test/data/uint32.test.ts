
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
import {isUint32, uint32Impl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, uint32Impl, 0)
testM("inv-boundedBelow", boundedBelowInv, uint32Impl, 0)
testM("inv-bounded", boundedInv, uint32Impl)

testM("inv-comparator", comparatorInv, uint32Impl, uint32Impl.top)
testM("inv-comparator", comparatorInv, uint32Impl, uint32Impl.bottom)

testM("inv-enum", enumInv, uint32Impl, 1)

testM("inv-order", orderInv, uint32Impl,
    uint32Impl.top, uint32Impl.bottom)

testM("isUint32", isIntM, isUint32, uint32Impl)

