
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
import {isUint32, uint32Impl} from "../src"


test("inv-boundedAbove", boundedAboveInv, uint32Impl, 0)
test("inv-boundedBelow", boundedBelowInv, uint32Impl, 0)
test("inv-bounded", boundedInv, uint32Impl)

test("inv-comparator", comparatorInv, uint32Impl, uint32Impl.top)
test("inv-comparator", comparatorInv, uint32Impl, uint32Impl.bottom)

test("inv-enum", enumInv, uint32Impl, 1)

test("inv-order", orderInv, uint32Impl,
    uint32Impl.top, uint32Impl.bottom)

test("isUint32", isIntM, isUint32, uint32Impl)

