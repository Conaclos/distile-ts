
/**
 * Name the lower bound of a type.
 * `order/Order' is not an ancestor since that types that are not totaaly
 * ordered may also be below-bounded.
 */
interface BoundedBelow <T> {

    readonly bottom: T

}

/**
 * Name the upper bound of a type.
 * `order/Order' is not an ancestor since that types that are not totaaly
 * ordered may also be above-bounded.
 */
interface BoundedAbove <T> {

    readonly top: T

}

/**
 * Both below and above bounded type.
 */
interface Bounded <T> extends BoundedBelow<T>, BoundedAbove<T> {}


export {
    BoundedBelow,
    BoundedAbove,
    Bounded
}

