
import test from "ava"
import {AssertContext} from "ava"
import {
    numericCharM,
    alphaLowerCharM,
    alphaUpperCharM,
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv0,
    comparatorInv1,
    comparatorInv2,
    enumInv,
    orderInv1,
    partOrderInv1,
    orderInv2,
    partOrderInv2,
    partOrderInv3
} from "../macro"
import {
    isNumericChar,
    isAlphaUpperChar,
    isAlphaLowerChar,
    isAlphanumericUpperChar,
    isAlphanumericLowerChar,
    isAlphanumericChar,
    alphanumericCharImpl
} from "../src"

const testedValues = [
    alphanumericCharImpl.bottom,
    "a",
    "9",
    alphanumericCharImpl.top
]

test("inv-bounded", boundedInv, alphanumericCharImpl)
test("inv0-comparator", comparatorInv0, alphanumericCharImpl)

for (const x of testedValues) {
    test("inv1-bounded", [boundedAboveInv, boundedBelowInv], alphanumericCharImpl, x)
    test("inv1-comparator", comparatorInv1, alphanumericCharImpl, x)
    test("inv1-order", [orderInv1, partOrderInv1], alphanumericCharImpl, x)

    for (const y of testedValues) {
        if (x !== y) {
            test(comparatorInv2, alphanumericCharImpl, x, y)
            test("inv2-order", [orderInv2, partOrderInv2], alphanumericCharImpl, x, y)

            for (const z of testedValues) {
                if (x !== z && y !== z) {
                    test("inv3-partorder", partOrderInv3, alphanumericCharImpl, x, y, z)
                }
            }
        }
    }
}

test("inv-enum", enumInv, alphanumericCharImpl, "a")
test("inv-enum", enumInv, alphanumericCharImpl, "9")

test("isNumericChar", numericCharM, isNumericChar, true)
test("isNumericChar", alphaLowerCharM, isNumericChar, false)
test("isNumericChar", alphaUpperCharM, isNumericChar, false)

test("sAlphaLowerChar", numericCharM, isAlphaLowerChar, false)
test("isAlphaLowerChar", alphaLowerCharM, isAlphaLowerChar, true)
test("isAlphaLowerChar", alphaUpperCharM, isAlphaLowerChar, false)

test("sAlphaUpperChar", numericCharM, isAlphaUpperChar, false)
test("isAlphaUpperChar", alphaLowerCharM, isAlphaUpperChar, false)
test("isAlphaUpperChar", alphaUpperCharM, isAlphaUpperChar, true)

test("isAlphanumChar", numericCharM, isAlphanumericChar, true)
test("isAlphanumChar", alphaLowerCharM, isAlphanumericChar, true)
test("isAlphanumChar", alphaUpperCharM, isAlphanumericChar, true)

test("sAlphanumeowerChar", numericCharM, isAlphanumericLowerChar, true)
test("isAlphanumLowerChar", alphaLowerCharM, isAlphanumericLowerChar, true)
test("isAlphanumLowerChar", alphaUpperCharM, isAlphanumericLowerChar, false)

test("sAlphanumUpperChar", numericCharM, isAlphanumericUpperChar, true)
test("isAlphanumUpperChar", alphaLowerCharM, isAlphanumericUpperChar, false)
test("isAlphanumUpperChar", alphaUpperCharM, isAlphanumericUpperChar, true)

test("alphanumericCharImpl", (t: AssertContext) => {
    // TODO
    t.pass()
})

