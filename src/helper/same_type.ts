

/**
 * @param a
 * @param b
 * @return Have 'a' and 'b' the same type?
 */
function sameType <U extends NonNull, V extends NonNull> (a: U, b: V):
        b is U & V {
    const typeofA = typeof a
    return typeofA === typeof b &&
        (typeofA !== "object" || a.constructor === b.constructor)
}


export {sameType}

