
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
import {isSafeInt, safeIntImpl} from "../../src"

// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, safeIntImpl, 0)
testM("inv-boundedBelow", boundedBelowInv, safeIntImpl, 0)
testM("inv-bounded", boundedInv, safeIntImpl)

testM("inv-comparator", comparatorInv, safeIntImpl, safeIntImpl.top)
testM("inv-comparator", comparatorInv, safeIntImpl, safeIntImpl.bottom)

testM("inv-enum", enumInv, safeIntImpl, -1)
testM("inv-enum", enumInv, safeIntImpl, 0)
testM("inv-enum", enumInv, safeIntImpl, 1)

testM("inv-order", orderInv, safeIntImpl,
    safeIntImpl.top, safeIntImpl.bottom)

test("isSafeInt", (t: AssertContext) => {
    t.true(isSafeInt(safeIntImpl.bottom))
    t.true(isSafeInt(safeIntImpl.top))

    t.true(isSafeInt(-1))
    t.true(isSafeInt(0))
    t.true(isSafeInt(1))
})

