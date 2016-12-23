
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


test("inv-boundedAbove", boundedAboveInv, uint8Impl, 0)
test("inv-boundedBelow", boundedBelowInv, uint8Impl, 0)
test("inv-bounded", boundedInv, uint8Impl)

test("inv-comparator", comparatorInv, uint8Impl, uint8Impl.top)
test("inv-comparator", comparatorInv, uint8Impl, uint8Impl.bottom)

test("inv-enum", enumInv, uint8Impl, 1)

test("inv-order", orderInv, uint8Impl,
    uint8Impl.top, uint8Impl.bottom)

test("isUint8", isIntM, isUint8, uint8Impl)

