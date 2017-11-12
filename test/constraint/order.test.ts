
import test from "ava"
import {AssertContext} from "ava"
import {
    orderInv1,
    partOrderInv1,
    orderInv2,
    partOrderInv2,
    partOrderInv3
} from "../macro"
import {
    Order,
    Ordering,
    intOrder,
    charOrder,
    compareBasedOrder
} from "../src"


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
const testedValues = [bottom, top]


for (const x of testedValues) {
    test("inv1-order", [orderInv1, partOrderInv1], intOrder, x)

    for (const y of testedValues) {
        if (x !== y) {
            test("inv2-order", [orderInv2, partOrderInv2], intOrder, x, y)
        }
    }
}

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

