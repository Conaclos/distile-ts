
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
} from "../macro"
import {isInt16, int16Impl} from "../src"


test("inv-boundedAbove", boundedAboveInv, int16Impl, 0)
test("inv-boundedBelow", boundedBelowInv, int16Impl, 0)
test("inv-bounded", boundedInv, int16Impl)

test("inv-comparator", comparatorInv, int16Impl, int16Impl.top)
test("inv-comparator", comparatorInv, int16Impl, int16Impl.bottom)

test("inv-enum", enumInv, int16Impl, -1)
test("inv-enum", enumInv, int16Impl, 0)
test("inv-enum", enumInv, int16Impl, 1)

test("inv-order", orderInv, int16Impl,
    int16Impl.top, int16Impl.bottom)

test("isInt16", isIntM, isInt16, int16Impl)

