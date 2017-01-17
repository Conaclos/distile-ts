
import {Bounded} from "../constraint/bounded.js"
import {
    Order,
    Ordering,
    compareBasedOrder,
    charOrder
} from "../constraint/order.js"
import {Enum} from "../constraint/enum.js"


type NumericChar = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type AlphaUpperChar = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" |
    "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" |
    "V" | "X" | "Y" | "Z"
type AlphaLowerChar = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" |
    "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" |
    "v" | "x" | "y" | "z"


type AlphanumericUpperChar = NumericChar | AlphaUpperChar
type AlphanumericLowerChar = NumericChar | AlphaLowerChar
type AlphanumericChar = NumericChar | AlphaUpperChar | AlphaLowerChar


const CHAR_CODE_0 = "0".charCodeAt(0)
const CHAR_CODE_9 = "9".charCodeAt(0)
const CHAR_CODE_UPPER_A = "A".charCodeAt(0)
const CHAR_CODE_UPPER_Z = "Z".charCodeAt(0)
const CHAR_CODE_LOWER_A = "a".charCodeAt(0)
const CHAR_CODE_LOWER_Z = "z".charCodeAt(0)

function isNumericChar (a: string): a is NumericChar {
    console.assert(a.length === 1)

    const code = a.charCodeAt(0)
    return CHAR_CODE_0 <= code && code <= CHAR_CODE_9
}

function isAlphaUpperChar (a: string): a is AlphaUpperChar {
    console.assert(a.length === 1)

    const code = a.charCodeAt(0)
    return CHAR_CODE_UPPER_A <= code && code <= CHAR_CODE_UPPER_Z
}

function isAlphaLowerChar (a: string): a is AlphaLowerChar {
    console.assert(a.length === 1)

    const code = a.charCodeAt(0)
    return CHAR_CODE_LOWER_A <= code && code <= CHAR_CODE_LOWER_Z
}

function isAlphanumericUpperChar (a: string): a is AlphanumericUpperChar {
    console.assert(a.length === 1)

    return isNumericChar(a) || isAlphaUpperChar(a)
}

function isAlphanumericLowerChar (a: string): a is AlphanumericLowerChar {
    console.assert(a.length === 1)

    return isNumericChar(a) || isAlphaLowerChar(a)
}

function isAlphanumericChar (a: string): a is AlphanumericChar {
    console.assert(a.length === 1)

    return isNumericChar(a) || isAlphaUpperChar(a) || isAlphaLowerChar(a)
}


// Impl.

const alphanumericCharImpl: Bounded<AlphanumericChar> &
    Order<AlphanumericChar> & Enum<AlphanumericChar> = {

    ...compareBasedOrder,

    bottom: <AlphanumericChar> "0",
    top: <AlphanumericChar> "z",

    compare (a: AlphanumericChar, b: AlphanumericChar): Ordering {
        return charOrder.compare(a, b)
    },

    predecessor (this: Bounded<AlphanumericChar>,
        a: AlphanumericChar): AlphanumericChar {

        console.assert(a !== this.bottom)

        const code = a.charCodeAt(0)
        if (code === CHAR_CODE_LOWER_A) {
            return "Z"
        } else if (code === CHAR_CODE_UPPER_A) {
            return "9"
        } else {
            return String.fromCharCode(code - 1) as AlphanumericChar
        }
    },

    successor (this: Bounded<AlphanumericChar>,
        a: AlphanumericChar): AlphanumericChar {

        console.assert(a !== this.top)

        const code = a.charCodeAt(0)
        if (code === CHAR_CODE_9) {
            return "A"
        } else if (code === CHAR_CODE_UPPER_Z) {
            return "a"
        } else {
            return String.fromCharCode(code + 1) as AlphanumericChar
        }
    }

}


export {
    NumericChar,
    AlphaUpperChar,
    AlphaLowerChar,
    AlphanumericUpperChar,
    AlphanumericLowerChar,
    AlphanumericChar,
    isNumericChar,
    isAlphaUpperChar,
    isAlphaLowerChar,
    isAlphanumericUpperChar,
    isAlphanumericLowerChar,
    isAlphanumericChar,
    alphanumericCharImpl
}

