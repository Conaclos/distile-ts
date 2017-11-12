
import {AssertContext} from "ava"
import {PartOrder, Order, Ordering} from "../src"

function partOrderInv1 <T> (t: AssertContext, u: PartOrder<T>, a: T): void {
    t.is(u.compare(a, a), Ordering.Equal)
    t.false(u.less(a, a))
    t.false(u.greater(a, a))
    t.true(u.lessEqual(a, a))
    t.true(u.greaterEqual(a, a))
    t.true(u.related(a, a))
}

function orderInv1 <T> (t: AssertContext, u: Order<T>, a: T): void {
    t.is(u.min(a, a), a)
    t.is(u.max(a, a), a)
}

function partOrderInv2 <T>
    (t: AssertContext, u: PartOrder<T>, a: T, b: T): void {

    t.is(u.compare(a, b), u.compare(a, b), "compare commutativity")
    t.is(u.related(a, b), u.related(b, a), "related commutativity")

    t.is(u.compare(a, b) === Ordering.Equal, u.equal(a, b))
    t.is(u.compare(a, b) === Ordering.Greater, u.greater(a, b))
    t.is(u.compare(a, b) === Ordering.Less, u.less(a, b))
    t.is(u.compare(a, b) !== undefined, u.related(a, b))
    t.is(u.equal(a, b) || u.greater(a, b), u.greaterEqual(a, b))
    t.is(u.equal(a, b) || u.less(a, b), u.lessEqual(a, b))

    if (u.related(a, b)) {
        t.not(u.less(a, b), u.equal(a, b) || u.greater(a, b))
        t.not(u.greater(a, b), u.equal(a, b) || u.less(a, b))
    } else {
        t.false(u.greater(a, b))
        t.false(u.less(a, b))
    }
}

function orderInv2 <T> (t: AssertContext, u: Order<T>, a: T, b: T): void {
    t.true(u.equal(u.max(a, b), u.max(b, a)), "max commutativity")
    t.true(u.equal(u.min(a, b), u.min(b, a)), "min commutativity")

    t.true(u.equal(u.max(a, b), a) || u.equal(u.max(a, b), b))
    t.true(u.equal(u.min(a, b), a) || u.equal(u.min(a, b), b))

    t.is(u.greaterEqual(a, b), u.equal(u.max(a, b), a))
    t.is(u.greaterEqual(a, b), u.equal(u.min(a, b), b))
    t.is(u.lessEqual(a, b), u.equal(u.max(a, b), b))
    t.is(u.lessEqual(a, b), u.equal(u.min(a, b), a))

    t.true(u.related(a, b))
}

function partOrderInv3 <T>
    (t: AssertContext, u: PartOrder<T>, a: T, b: T, c: T): void {

    t.true((! (u.less(a, b) && u.less(b, c))) || u.less(a, c),
    "less transitivity ")
}


export {
    partOrderInv1,
    partOrderInv2,
    partOrderInv3,
    orderInv1,
    orderInv2
}

