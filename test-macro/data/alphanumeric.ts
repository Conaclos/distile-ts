
import {AssertContext} from "ava"

/**
 * @param t
 * @param f
 * @param aExpected Should `f' be a type guard for numeric chars?
 */
function numericCharM
    (t: AssertContext, f: (a: string) => boolean, aExpected: boolean): void {

    t.is(f("0"), aExpected)
    t.is(f("1"), aExpected)
    t.is(f("2"), aExpected)
    t.is(f("3"), aExpected)
    t.is(f("4"), aExpected)
    t.is(f("5"), aExpected)
    t.is(f("6"), aExpected)
    t.is(f("7"), aExpected)
    t.is(f("8"), aExpected)
    t.is(f("9"), aExpected)
}

/**
 * @param t
 * @param f
 * @param aExpected Should `f' be a type guard for alpha lower chars?
 */
function alphaLowerCharM
    (t: AssertContext, f: (a: string) => boolean, aExpected: boolean): void {

    t.is(f("a"), aExpected)
    t.is(f("b"), aExpected)
    t.is(f("c"), aExpected)
    t.is(f("d"), aExpected)
    t.is(f("e"), aExpected)
    t.is(f("f"), aExpected)
    t.is(f("g"), aExpected)
    t.is(f("h"), aExpected)
    t.is(f("i"), aExpected)
    t.is(f("j"), aExpected)
    t.is(f("k"), aExpected)
    t.is(f("l"), aExpected)
    t.is(f("m"), aExpected)
    t.is(f("n"), aExpected)
    t.is(f("o"), aExpected)
    t.is(f("p"), aExpected)
    t.is(f("q"), aExpected)
    t.is(f("r"), aExpected)
    t.is(f("s"), aExpected)
    t.is(f("t"), aExpected)
    t.is(f("u"), aExpected)
    t.is(f("v"), aExpected)
    t.is(f("x"), aExpected)
    t.is(f("y"), aExpected)
    t.is(f("z"), aExpected)
}

/**
 * @param t
 * @param f
 * @param aExpected Should `f' be a type guard for alpha upper chars?
 */
function alphaUpperCharM
    (t: AssertContext, f: (a: string) => boolean, aExpected: boolean): void {

    t.is(f("A"), aExpected)
    t.is(f("B"), aExpected)
    t.is(f("C"), aExpected)
    t.is(f("D"), aExpected)
    t.is(f("E"), aExpected)
    t.is(f("F"), aExpected)
    t.is(f("G"), aExpected)
    t.is(f("H"), aExpected)
    t.is(f("I"), aExpected)
    t.is(f("J"), aExpected)
    t.is(f("K"), aExpected)
    t.is(f("L"), aExpected)
    t.is(f("M"), aExpected)
    t.is(f("N"), aExpected)
    t.is(f("O"), aExpected)
    t.is(f("P"), aExpected)
    t.is(f("Q"), aExpected)
    t.is(f("R"), aExpected)
    t.is(f("S"), aExpected)
    t.is(f("T"), aExpected)
    t.is(f("U"), aExpected)
    t.is(f("V"), aExpected)
    t.is(f("X"), aExpected)
    t.is(f("Y"), aExpected)
    t.is(f("Z"), aExpected)
}

export {numericCharM, alphaLowerCharM, alphaUpperCharM}

