
import test from "ava"
import {AssertContext} from "ava"
import {
    strictComparator
} from "../../src"

test("nullable-equal", (t: AssertContext) => {
    t.true(strictComparator.nullableEqual(null, null))
    t.false(strictComparator.nullableEqual(null, 1))
})

