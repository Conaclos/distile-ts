
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
import {isInt32, int32Impl} from "../src"


test("inv-boundedAbove", boundedAboveInv, int32Impl, 0)
test("inv-boundedBelow", boundedBelowInv, int32Impl, 0)
test("inv-bounded", boundedInv, int32Impl)

test("inv-comparator", comparatorInv, int32Impl, int32Impl.top)
test("inv-comparator", comparatorInv, int32Impl, int32Impl.bottom)

test("inv-enum", enumInv, int32Impl, -1)
test("inv-enum", enumInv, int32Impl, 0)
test("inv-enum", enumInv, int32Impl, 1)

test("inv-order", orderInv, int32Impl,
    int32Impl.top, int32Impl.bottom)

test("isInt32", isIntM, isInt32, int32Impl)

