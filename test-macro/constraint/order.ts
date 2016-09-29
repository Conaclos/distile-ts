
import {AssertContext} from "ava"
import {Order, Ordering} from "../../src"


function orderInv <T> (t: AssertContext, u: Order<T>, a: T, b: T): void {

    // Core

    t.is(u.equal(a, b), u.equal(b, a))
    t.true(a !== b || u.equal(a, b))

    t.true(u.equal(a, b) || (u.greater(a, b) !== u.greater(b, a)))

    t.true(u.equal(u.max(a, b), u.max(b, a)))
    t.true(u.equal(u.max(a, b), a) || u.equal(u.max(a, b), b))
    t.is(u.greater(a, b) || u.equal(a, b), u.equal(u.max(a, b), a))

    // Extension

    t.not(u.less(a, b), u.equal(a, b) || u.greater(a, b))
    t.is(u.greaterEqual(a, b), u.greater(a, b) || u.equal(a, b))
    t.is(u.lessEqual(a, b), u.less(a, b) || u.equal(a, b))

    t.is(u.equal(a, b), u.equal(u.max(a, b), u.min(b, a)))
    t.is(u.greater(a, b) || u.equal(a, b), u.equal(u.min(a, b), b))

    t.is(u.greater(a, b), u.compare(a, b) === Ordering.Greater)
    t.is(u.less(a, b), u.compare(a, b) === Ordering.Less)
    t.is(u.equal(a, b), u.compare(a, b) === Ordering.Equal)
}

export {orderInv}

