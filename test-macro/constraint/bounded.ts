
import {AssertContext} from "ava"
import {PartOrder, Bounded, BoundedAbove, BoundedBelow} from "../src"


function boundedAboveInv <T> (t: AssertContext,
    u: BoundedAbove<T> & PartOrder<T>, a: T): void {

    t.true(u.related(u.top, a) && u.greaterEqual(u.top, a))
}

function boundedBelowInv <T> (t: AssertContext,
    u: BoundedBelow<T> & PartOrder<T>, a: T): void {

    t.true(u.related(u.bottom, a) && u.lessEqual(u.bottom, a))
}

function boundedInv <T> (t: AssertContext,
    u: Bounded<T> & PartOrder<T>): void {

    t.true(u.related(u.bottom, u.top) && u.lessEqual(u.bottom, u.top))
}


export {
    boundedAboveInv,
    boundedBelowInv,
    boundedInv
}

