
import test from "ava"
import {AssertContext} from "ava"
import {
    numericCharM,
    alphaLowerCharM,
    alphaUpperCharM,
    boundedAboveInv,
    boundedBelowInv,
    boundedInv,
    comparatorInv,
    enumInv,
    orderInv
} from "../../test-macro"
import {
    isNumericChar,
    isAlphaUpperChar,
    isAlphaLowerChar,
    isAlphanumericUpperChar,
    isAlphanumericLowerChar,
    isAlphanumericChar,
    alphanumericCharImpl
} from "../../src"


test("inv-boundedAbove", boundedAboveInv, alphanumericCharImpl, "a")
test("inv-boundedBelow", boundedBelowInv, alphanumericCharImpl, "a")
test("inv-bounded", boundedInv, alphanumericCharImpl)

test("inv-comparatorInv", comparatorInv, alphanumericCharImpl,
    alphanumericCharImpl.bottom)
test("inv-comparatorInv", comparatorInv, alphanumericCharImpl, "a")
test("inv-comparatorInv", comparatorInv, alphanumericCharImpl,
    alphanumericCharImpl.top)

test("inv-enum", enumInv, alphanumericCharImpl, "a")
test("inv-enum", enumInv, alphanumericCharImpl, "9")

test("inv-order", orderInv, alphanumericCharImpl,
    alphanumericCharImpl.top, alphanumericCharImpl.bottom)

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
})

