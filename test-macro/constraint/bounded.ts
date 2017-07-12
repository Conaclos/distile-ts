
import {AssertContext} from "ava"
import {Order, Bounded, BoundedAbove, BoundedBelow} from "../src"


function boundedAboveInv <T> (t: AssertContext,
    u: BoundedAbove<T> & Order<T>, a: T): void {

    t.true(u.greaterEqual(u.top, a))
}

function boundedBelowInv <T> (t: AssertContext,
    u: BoundedBelow<T> & Order<T>, a: T): void {

    t.true(u.lessEqual(u.bottom, a))
}

function boundedInv <T> (t: AssertContext,
    u: Bounded<T> & Order<T>): void {

    t.true(u.lessEqual(u.bottom, u.top))
}


export {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv
}

