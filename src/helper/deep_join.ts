
import {JoinFunction, copyAll} from "./join.js"


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
function prototypeChainOfUntil (aTarget: Properties,
    aBounds: Array<Properties | null>): Array<Properties> {

    const proto = Reflect.getPrototypeOf(aTarget)
    if (aBounds.indexOf(proto) === -1) {
        return prototypeChainOfUntil(proto, aBounds).concat(proto)
    } else {
        return []
    }
}

/**
 * Each pair of objects (a, b) must be conflict-free
 * (except for "constructor" property)
 *
 * @param aFirst
 * @param aOthers
 * @return Concatenation of `aFirst' and `aOthers'.
 */
const deepJoin: JoinFunction = function (aFirst: Properties,
    ...aOthers: Properties[]) {

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


export {deepJoin}

