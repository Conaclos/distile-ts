
import test from "ava"
import {AssertContext} from "ava"
import {join} from "../../src"

test("join-base", (t: AssertContext) => {
    const a = {
        f (): void {}
    }
    const b = {
        g (): void {}
    }
    const ab = join(a, b)

    const aPropCount = Object.keys(a).length
    const bPropCount = Object.keys(b).length
    const abPropCount = Object.keys(ab).length

    t.is(abPropCount, aPropCount + bPropCount)
    t.is(a.f, ab.f)
    t.is(b.g, ab.g)
})

test("join-non-enumerable-property", (t: AssertContext) => {
    const a = {
        f (): void {}
    }
    const b = {
        g (): void {}
    }
    Object.defineProperty(a, 'f', {
        enumerable: false
    })
    Object.defineProperty(b, 'g', {
        enumerable: false
    })
    const ab = join(a, b)

    const aPropCount = Object.getOwnPropertyNames(a).length
    const bPropCount = Object.getOwnPropertyNames(b).length
    const abPropCount = Object.getOwnPropertyNames(ab).length

    t.is(abPropCount, aPropCount + bPropCount)
    t.is(a.f, ab.f)
    t.is(b.g, ab.g)
})

