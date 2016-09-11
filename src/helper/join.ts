
/**
 * Copy enum and non-enum properties from `aSource' to `aTarget'
 * @param aSource
 * @param aSubject - mutable (append-only)
 */
function copyAll (aSource: Object, aSubject: Object): void {
    const props = Object.getOwnPropertyNames(aSource)
    for (let f of props) {
        console.assert(f === "constructor" || ! (f in aSubject) ||
            aSubject[f] === aSource[f],
            "require: a property cannot be redefined. Conflict on '%s'", f)

        aSubject[f] = aSource[f]
    }
}

/**
 *
 * e.g. prototypeChainOfUntil({}, [null]) returns [Object.prototype]
 *      prototypeChainOfUntil({}, [Object.prototype]) returns []
 *
 * @param aTarget
 * @param aBounds - must contain at least one element of the prototype
 *  chain of `aTarget'.
 *  Note that `null' is the bottom prototype of all objects.
 *  In contrast, `Object.protype' is not:
 *  this is the case for `Object.create(null)'
 $ @return Prototype chain of `aTarget' until to meet
 *  one prototype of `aBounds'. First item is the deeper prototype.
 */
function prototypeChainOfUntil
    (aTarget: Object, aBounds: Array<Object | null>): Array<Object> {

    const proto = Reflect.getPrototypeOf(aTarget)
    if (aBounds.indexOf(proto) === -1) {
        return prototypeChainOfUntil(proto, aBounds).concat(proto)
    } else {
        return []
    }
}

interface ExtendFunc {
    <A, B> (a: A, b: B): A & B
    <A, B, C> (a: A, b: B, c: C): A & B & C
    <A, B, C, D> (a: A, b: B, c: C, d: D): A & B & C & D
    <A, B, C, D, E> (a: A, b: B, c: C, d: D, e: E): A & B & C & D & E
}

declare let join: ExtendFunc

/**
 * Each pair of objects (a, b) must be conflict-free
 * (except for "constructor" property)
 *
 * @param aFirst
 * @param aOthers
 * @return Concatenation of `aFirst' and `aOthers'.
 */
join = function (aFirst, ...aOthers) {
    const result = Object.create(aFirst) // mutable

    let includedProtos = prototypeChainOfUntil(aFirst, [null]).concat([null])
    for (let item of aOthers) {
        const protos = prototypeChainOfUntil(item, includedProtos)

        for (let proto of protos) {
            copyAll(proto, result)
        }
        copyAll(item, result)

        includedProtos = includedProtos.concat(protos)
    }

    if (Object.hasOwnProperty.call(result, "constructor")) {
        delete result.constructor
    }

    return result
}


export {join}

