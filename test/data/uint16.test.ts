
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
import {isUint16, uint16Impl} from "../../src"


test("inv-boundedAbove", boundedAboveInv, uint16Impl, 0)
test("inv-boundedBelow", boundedBelowInv, uint16Impl, 0)
test("inv-bounded", boundedInv, uint16Impl)

test("inv-comparator", comparatorInv, uint16Impl, uint16Impl.top)
test("inv-comparator", comparatorInv, uint16Impl, uint16Impl.bottom)

test("inv-enum", enumInv, uint16Impl, 1)

test("inv-order", orderInv, uint16Impl,
    uint16Impl.top, uint16Impl.bottom)

test("isUint16", isIntM, isUint16, uint16Impl)

