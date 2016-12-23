
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
import {isSafeInt, safeIntImpl} from "../../src"


test("inv-boundedAbove", boundedAboveInv, safeIntImpl, 0)
test("inv-boundedBelow", boundedBelowInv, safeIntImpl, 0)
test("inv-bounded", boundedInv, safeIntImpl)

test("inv-comparator", comparatorInv, safeIntImpl, safeIntImpl.top)
test("inv-comparator", comparatorInv, safeIntImpl, safeIntImpl.bottom)

test("inv-enum", enumInv, safeIntImpl, -1)
test("inv-enum", enumInv, safeIntImpl, 0)
test("inv-enum", enumInv, safeIntImpl, 1)

test("inv-order", orderInv, safeIntImpl,
    safeIntImpl.top, safeIntImpl.bottom)

test("issafeInt", isIntM, isSafeInt, safeIntImpl)

