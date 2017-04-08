
import test from "ava"
import {AssertContext} from "ava"
import {
    boundedBelowInv,
    comparatorInv,
    enumInv,
    orderInv
} from "../test-macro"
import {Counter, CounterData, uint8Impl, makeCounter} from "../src"


const uint8CounterImpl: Counter<number> = makeCounter(uint8Impl, Uint8Array)
const c1 = Uint8Array.of(uint8Impl.top)
const c2 = Uint8Array.of(uint8Impl.top, uint8Impl.top)
const c3 = Uint8Array.of(uint8Impl.top, uint8Impl.bottom)

test("inv-boundedBelow", boundedBelowInv, uint8CounterImpl, c1)
test("inv-boundedBelow", boundedBelowInv, uint8CounterImpl, c2)
test("inv-boundedBelow", boundedBelowInv, uint8CounterImpl, c3)

test("inv-comparator", comparatorInv, uint8CounterImpl, uint8CounterImpl.bottom)

test("inv-enum", enumInv, uint8CounterImpl, c1)
test("inv-enum", enumInv, uint8CounterImpl, c2)
test("inv-enum", enumInv, uint8CounterImpl, c3)

test("inv-order", orderInv, uint8CounterImpl, c1, c2)
test("inv-order", orderInv, uint8CounterImpl, c1, c3)
test("inv-order", orderInv, uint8CounterImpl, c2, c3)

