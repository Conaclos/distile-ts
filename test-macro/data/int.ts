
import {AssertContext} from "ava"
import {Bounded} from "../../src"

function isIntM (t: AssertContext,
    f: (a: number) => boolean, u: Bounded<number>): void {

    t.true(f(u.bottom))
    t.true(f(u.top))

    t.true(f(0))
    t.true(f(1))

    t.false(f(u.bottom - 1))
    t.false(f(u.top + 1))

    t.false(f(Number.NaN))

    t.false(f(Number.NEGATIVE_INFINITY))
    t.false(f(Number.POSITIVE_INFINITY))

    t.false(f(Number.EPSILON))
}

export {isIntM}

