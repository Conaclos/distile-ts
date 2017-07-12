
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
import {isInt8, int8Impl} from "../src"


test("inv-boundedAbove", boundedAboveInv, int8Impl, 0)
test("inv-boundedBelow", boundedBelowInv, int8Impl, 0)
test("inv-bounded", boundedInv, int8Impl)

test("inv-comparator", comparatorInv, int8Impl, int8Impl.top)
test("inv-comparator", comparatorInv, int8Impl, int8Impl.bottom)

test("inv-enum", enumInv, int8Impl, -1)
test("inv-enum", enumInv, int8Impl, 0)
test("inv-enum", enumInv, int8Impl, 1)

test("inv-order", orderInv, int8Impl,
    int8Impl.top, int8Impl.bottom)

test("isInt8", isIntM, isInt8, int8Impl)

