
import test from "ava"
import {AssertContext} from "ava"
import {intEnum, intCyclicEnum, Bounded} from "../../src"

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
const safeIntBounds: Bounded<number> = {
    bottom: MIN,
    top: MAX
}

const midPositive = Math.floor(MAX / 2)
const midNegative = Math.floor(MAX / 2)


test("intEnum-predecessor", (t: AssertContext) => {
    const impl = Object.assign({}, safeIntBounds, intEnum)

    t.is(impl.predecessor(MAX), MAX - 1)
    t.is(impl.predecessor(midPositive), midPositive - 1)
    t.is(impl.predecessor(1), 0)
    t.is(impl.predecessor(0), -1)
    t.is(impl.predecessor(midNegative), midNegative - 1)
    t.is(impl.predecessor(MIN + 1), MIN)
})

test("intEnum-successor", (t: AssertContext) => {
    const impl = Object.assign({}, safeIntBounds, intEnum)

    t.is(impl.successor(MAX - 1), MAX)
    t.is(impl.successor(midPositive - 1), midPositive)
    t.is(impl.successor(0), 1)
    t.is(impl.successor(-1), 0)
    t.is(impl.successor(midNegative), midNegative + 1)
    t.is(impl.successor(MIN), MIN + 1)
})

test("intCyclicEnum-predecessor", (t: AssertContext) => {
    const impl = Object.assign({}, safeIntBounds, intCyclicEnum)

    t.is(impl.predecessor(MIN), MAX)

    t.is(impl.predecessor(MAX), MAX - 1)
    t.is(impl.predecessor(midPositive), midPositive - 1)
    t.is(impl.predecessor(1), 0)
    t.is(impl.predecessor(0), -1)
    t.is(impl.predecessor(midNegative), midNegative - 1)
})

test("intCyclicEnum-successor", (t: AssertContext) => {
    const impl = Object.assign({}, safeIntBounds, intCyclicEnum)

    t.is(impl.successor(MAX), MIN)

    t.is(impl.successor(MAX - 1), MAX)
    t.is(impl.successor(midPositive - 1), midPositive)
    t.is(impl.successor(0), 1)
    t.is(impl.successor(-1), 0)
    t.is(impl.successor(midNegative), midNegative + 1)
    t.is(impl.successor(MIN), MIN + 1)
})

