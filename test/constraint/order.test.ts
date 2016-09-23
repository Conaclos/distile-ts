
import test from "ava"
import {AssertContext} from "ava"
import {
    Order,
    Ordering,
    intOrder,
    charOrder,
    compareBasedOrder
} from "../../src"

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER


test("intOrder-compare-equal", (t: AssertContext) => {
    t.is(intOrder.compare(MIN, MAX), Ordering.Less)
    t.is(intOrder.compare(0, 1), Ordering.Less)
    t.is(intOrder.compare(-1, 0), Ordering.Less)

    t.is(intOrder.compare(MAX, MAX), Ordering.Equal)
    t.is(intOrder.compare(1, 1), Ordering.Equal)
    t.is(intOrder.compare(0, 0), Ordering.Equal)
    t.is(intOrder.compare(-1, -1), Ordering.Equal)
    t.is(intOrder.compare(MIN, MIN), Ordering.Equal)

    t.is(intOrder.compare(MAX, MIN), Ordering.Greater)
    t.is(intOrder.compare(1, 0), Ordering.Greater)
    t.is(intOrder.compare(0, -1), Ordering.Greater)
})

test("charOrder-compare-equal", (t: AssertContext) => {
    t.is(charOrder.compare("0", "1"), Ordering.Less)
    t.is(charOrder.compare("9", "a"), Ordering.Less)
    t.is(charOrder.compare("a", "b"), Ordering.Less)

    t.is(charOrder.compare("0", "0"), Ordering.Equal)
    t.is(charOrder.compare("a", "a"), Ordering.Equal)

    t.is(charOrder.compare("1", "0"), Ordering.Greater)
    t.is(charOrder.compare("a", "9"), Ordering.Greater)
    t.is(charOrder.compare("b", "a"), Ordering.Greater)
})

test("compareBasedOrder", (t: AssertContext) => {
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

