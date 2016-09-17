
interface JoinFunction {
    <A, B> (a: A, b: B): A & B
    <A, B, C> (a: A, b: B, c: C): A & B & C
    <A, B, C, D> (a: A, b: B, c: C, d: D): A & B & C & D
    <A, B, C, D, E> (a: A, b: B, c: C, d: D, e: E): A & B & C & D & E
}


/**
 * Copy enum and non-enum properties from `aSource' to `aTarget'
 * @param aSource
 * @param aSubject - mutable (append-only)
 */
function copyAll (aSource: Properties, aSubject: Properties): void {
    const props = Object.getOwnPropertyNames(aSource)
    for (let f of props) {
        console.assert(f === "constructor" || ! (f in aSubject) ||
            aSubject[f] === aSource[f],
            "require: a property cannot be redefined. Conflict on '%s'", f)

        aSubject[f] = aSource[f]
    }
}

/**
 * @param aSources
 *      Conflict-free list of objects.
 *      Each one must have `null' or `Object.prototype' as protoyupe.
 *      Each one must have no property indexed by a Symbol.
 * @return Concatenation of each objects in `aSources'.
 */
const join: JoinFunction = function (...aSources: Properties[]): Properties {
    const result = {}

    for (let item of aSources) {
        console.assert((! ("constructor" in item)) ||
            item.constructor === Object,
            "require: all argument have eitheir null or Object.prototype as prototype. It is not the case of the %s-th argument.",
            aSources.indexOf(item))
        console.assert(Object.getOwnPropertySymbols(item).length === 0,
            "require: There is not a property indexed by a Symbol. This is not the case of the %s-th arg.",
            aSources.indexOf(item))

        copyAll(item, result)
    }

    return result
}


export {JoinFunction, copyAll, join}

