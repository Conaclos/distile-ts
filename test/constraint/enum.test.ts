
import test from "ava"
import {AssertContext} from "ava"
import {
    enumInv,
    unboundedEnumInv,
    cyclicEnumInv
} from "../macro"
import {intEnum, intCyclicEnum, Bounded} from "../src"


const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
const safeIntBounds: Bounded<number> = {
    bottom: MIN,
    top: MAX
}

const midPositive = Math.floor(MAX / 2)
const midNegative = Math.floor(MAX / 2)

const intEnumImpl = Object.assign({}, safeIntBounds, intEnum)
const cyclicIntEnumImpl = Object.assign({}, safeIntBounds, intCyclicEnum)


test("intEnum-inv", enumInv, intEnumImpl, 0)
test("intEnum-inv", unboundedEnumInv, intEnumImpl, 0)

test("intEnum-predecessor", (t: AssertContext) => {
    t.is(intEnumImpl.predecessor(MAX), MAX - 1)
    t.is(intEnumImpl.predecessor(midPositive), midPositive - 1)
    t.is(intEnumImpl.predecessor(1), 0)
    t.is(intEnumImpl.predecessor(0), -1)
    t.is(intEnumImpl.predecessor(midNegative), midNegative - 1)
    t.is(intEnumImpl.predecessor(MIN + 1), MIN)
})

test("intEnum-successor", (t: AssertContext) => {
    t.is(intEnumImpl.successor(MAX - 1), MAX)
    t.is(intEnumImpl.successor(midPositive - 1), midPositive)
    t.is(intEnumImpl.successor(0), 1)
    t.is(intEnumImpl.successor(-1), 0)
    t.is(intEnumImpl.successor(midNegative), midNegative + 1)
    t.is(intEnumImpl.successor(MIN), MIN + 1)
})

test("intEnum-inv", enumInv, cyclicIntEnumImpl, 0)
test("intEnum-inv", unboundedEnumInv, cyclicIntEnumImpl, 0)
test("intCyclicEnum-inv", cyclicEnumInv, cyclicIntEnumImpl)

test("intCyclicEnum-predecessor", (t: AssertContext) => {
    t.is(cyclicIntEnumImpl.predecessor(MAX), MAX - 1)
    t.is(cyclicIntEnumImpl.predecessor(midPositive), midPositive - 1)
    t.is(cyclicIntEnumImpl.predecessor(1), 0)
    t.is(cyclicIntEnumImpl.predecessor(0), -1)
    t.is(cyclicIntEnumImpl.predecessor(midNegative), midNegative - 1)
})

test("intCyclicEnum-successor", (t: AssertContext) => {
    t.is(cyclicIntEnumImpl.successor(MAX - 1), MAX)
    t.is(cyclicIntEnumImpl.successor(midPositive - 1), midPositive)
    t.is(cyclicIntEnumImpl.successor(0), 1)
    t.is(cyclicIntEnumImpl.successor(-1), 0)
    t.is(cyclicIntEnumImpl.successor(midNegative), midNegative + 1)
    t.is(cyclicIntEnumImpl.successor(MIN), MIN + 1)
})

