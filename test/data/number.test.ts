
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv,
    orderInv
} from "../macro"
import {numberImpl} from "../src"


test("inv-boundedAbove", boundedAboveInv, numberImpl, 0)
test("inv-boundedBelow", boundedBelowInv, numberImpl, 0)
test("inv-bounded", boundedInv, numberImpl)

test("inv-comparator", comparatorInv, numberImpl, numberImpl.top)
test("inv-comparator", comparatorInv, numberImpl, numberImpl.bottom)

test("inv-order", orderInv, numberImpl, numberImpl.top, numberImpl.bottom)
test("inv-order", orderInv, numberImpl, 0, 0)
test("inv-order", orderInv, numberImpl, 1, 2)
test("inv-order", orderInv, numberImpl, -1, -2)
test("inv-order", orderInv, numberImpl, 0, Number.EPSILON / 2)
test("inv-order", orderInv, numberImpl, - Number.EPSILON / 2, 0)
test("inv-order", orderInv, numberImpl,
    - Number.EPSILON / 2, Number.EPSILON / 2)

