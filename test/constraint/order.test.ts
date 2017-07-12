
import test from "ava"
import {AssertContext} from "ava"
import {orderInv} from "../macro"
import {
    Order,
    Ordering,
    intOrder,
    charOrder,
    compareBasedOrder
} from "../src"


const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

test("intOrder-inv-diff-values", orderInv, intOrder, MIN, MAX)
test("intOrder-inv-equal-values", orderInv, intOrder, 0, 0)

test("intOrder-compare-equal", (t: AssertContext) => {
    t.true(intOrder.less(MIN, MAX))
    t.true(intOrder.less(0, 1))
    t.true(intOrder.less(-1, 0))

    t.true(intOrder.equal(MAX, MAX))
    t.true(intOrder.equal(1, 1))
    t.true(intOrder.equal(0, 0))
    t.true(intOrder.equal(-1, -1))
    t.true(intOrder.equal(MIN, MIN))
})

test("charOrder-inv-diff-values", orderInv, charOrder, "a", "0")
test("charOrder-inv-equal-values", orderInv, charOrder, "a", "a")

test("charOrder-compare-equal", (t: AssertContext) => {
    t.true(charOrder.less("0", "1"))
    t.true(charOrder.less("9", "a"))
    t.true(charOrder.less("a", "b"))

    t.true(charOrder.equal("0", "0"))
    t.true(charOrder.equal("a", "a"))
})

const bottom = {}
const top = {}
const impl: Order<Object> = Object.assign({
    compare (a: Object, b: Object): Ordering {
        if (a === b) {
            return Ordering.Equal
        }
        else if (a === bottom) {
            return Ordering.Less
        }
        else {
            return Ordering.Greater
        }
    }
}, compareBasedOrder)

test("compareBased-inv-diff-values", orderInv, impl, top, bottom)
test("compareBased-inv-equal-values", orderInv, impl, top, top)

test("compareBasedOrder", (t: AssertContext) => {

    t.true(impl.equal(bottom, bottom))
    t.true(impl.equal(top, top))

    t.true(impl.less(bottom, top))
    t.false(impl.less(top, bottom))

    t.true(impl.lessEqual(bottom, top))
    t.false(impl.lessEqual(top, bottom))
    t.true(impl.lessEqual(bottom, bottom))
    t.true(impl.lessEqual(top, top))

    t.false(impl.greater(bottom, top))
    t.true(impl.greater(top, bottom))

    t.false(impl.greaterEqual(bottom, top))
    t.true(impl.greaterEqual(top, bottom))
    t.true(impl.greaterEqual(bottom, bottom))
    t.true(impl.greaterEqual(top, top))

    t.is(impl.min(bottom, top), impl.min(top, bottom), "min commutativity")
    t.is(impl.min(bottom, top), bottom)
    t.is(impl.min(top, top), top)

    t.is(impl.max(bottom, top), impl.max(top, bottom), "max commutativity")
    t.is(impl.max(bottom, top), top)
    t.is(impl.max(bottom, bottom), bottom)
})

