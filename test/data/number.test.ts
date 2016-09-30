
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv,
    orderInv
} from "../../test-macro"
import {numberImpl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, numberImpl, 0)
testM("inv-boundedBelow", boundedBelowInv, numberImpl, 0)
testM("inv-bounded", boundedInv, numberImpl)

testM("inv-comparator", comparatorInv, numberImpl, numberImpl.top)
testM("inv-comparator", comparatorInv, numberImpl, numberImpl.bottom)

testM("inv-order", orderInv, numberImpl, numberImpl.top, numberImpl.bottom)
testM("inv-order", orderInv, numberImpl, 0, 0)
testM("inv-order", orderInv, numberImpl, 1, 2)
testM("inv-order", orderInv, numberImpl, -1, -2)
testM("inv-order", orderInv, numberImpl, 0, Number.EPSILON / 2)
testM("inv-order", orderInv, numberImpl, - Number.EPSILON / 2, 0)
testM("inv-order", orderInv, numberImpl,
    - Number.EPSILON / 2, Number.EPSILON / 2)

