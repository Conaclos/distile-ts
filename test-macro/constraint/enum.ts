
import {AssertContext} from "ava"
import {Bounded, Comparator, Enum, Order} from "../../src"


function enumInv <T> (t: AssertContext,
    u: Comparator<T> & Enum<T>, a: T): void {

    t.true(u.equal(u.successor(u.predecessor(a)), a))
    t.true(u.equal(u.predecessor(u.successor(a)), a))
}

function unboundedEnumInv <T> (t: AssertContext,
    u: Enum<T> & Order<T>, a: T): void {

    t.true(u.less(u.predecessor(a), a))
    t.true(u.less(a, u.successor(a)))
}

function cyclicEnumInv <T> (t: AssertContext,
    u: Bounded<T> & Enum<T> & Order<T>): void {

    t.true(u.equal(u.top, u.predecessor(u.bottom)))
    t.true(u.equal(u.bottom, u.successor(u.top)))
}


export {enumInv, unboundedEnumInv, cyclicEnumInv}

