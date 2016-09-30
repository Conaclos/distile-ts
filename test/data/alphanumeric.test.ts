
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


// Temp fix. Ava doesn't export the signature of `test' that enables macro.
const testM = test as
    (l: string, m: (t: AssertContext, ...a: any[]) => void, ...a: any[]) => void


testM("inv-boundedAbove", boundedAboveInv, alphanumericCharImpl, "a")
testM("inv-boundedBelow", boundedBelowInv, alphanumericCharImpl, "a")
testM("inv-bounded", boundedInv, alphanumericCharImpl)

testM("inv-comparatorInv", comparatorInv, alphanumericCharImpl,
    alphanumericCharImpl.bottom)
testM("inv-comparatorInv", comparatorInv, alphanumericCharImpl, "a")
testM("inv-comparatorInv", comparatorInv, alphanumericCharImpl,
    alphanumericCharImpl.top)

testM("inv-enum", enumInv, alphanumericCharImpl, "a")
testM("inv-enum", enumInv, alphanumericCharImpl, "9")

testM("inv-order", orderInv, alphanumericCharImpl,
    alphanumericCharImpl.top, alphanumericCharImpl.bottom)

testM("isNumericChar", numericCharM, isNumericChar, true)
testM("isNumericChar", alphaLowerCharM, isNumericChar, false)
testM("isNumericChar", alphaUpperCharM, isNumericChar, false)

testM("sAlphaLowerChar", numericCharM, isAlphaLowerChar, false)
testM("isAlphaLowerChar", alphaLowerCharM, isAlphaLowerChar, true)
testM("isAlphaLowerChar", alphaUpperCharM, isAlphaLowerChar, false)

testM("sAlphaUpperChar", numericCharM, isAlphaUpperChar, false)
testM("isAlphaUpperChar", alphaLowerCharM, isAlphaUpperChar, false)
testM("isAlphaUpperChar", alphaUpperCharM, isAlphaUpperChar, true)

testM("isAlphanumChar", numericCharM, isAlphanumericChar, true)
testM("isAlphanumChar", alphaLowerCharM, isAlphanumericChar, true)
testM("isAlphanumChar", alphaUpperCharM, isAlphanumericChar, true)

testM("sAlphanumeowerChar", numericCharM, isAlphanumericLowerChar, true)
testM("isAlphanumLowerChar", alphaLowerCharM, isAlphanumericLowerChar, true)
testM("isAlphanumLowerChar", alphaUpperCharM, isAlphanumericLowerChar, false)

testM("sAlphanumUpperChar", numericCharM, isAlphanumericUpperChar, true)
testM("isAlphanumUpperChar", alphaLowerCharM, isAlphanumericUpperChar, false)
testM("isAlphanumUpperChar", alphaUpperCharM, isAlphanumericUpperChar, true)

test("alphanumericCharImpl", (t: AssertContext) => {
    // TODO
})

