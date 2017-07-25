
// Please don't add import/export clauses to ensure global availlability.

/*
 * Extensions for `lib.d.ts'.
 */


/**
 * Property dictionary.
 */
type Properties = {[f: string]: any}


/**
 * any is evil.
 * Enable type-safe any type.
 */
type Any <T = object> = {
    [k in keyof T]: Any<T[k]>
} | boolean | number | string | symbol | null | undefined


/**
 * Read-only typed or untyped array.
 */
interface TypeableArray <T> extends ArrayLike<T> {

    [Symbol.iterator] (): IterableIterator<T>

    /**
      * @param aSeparator
      *     String to separate each element of the array.
      *     Default: ','
      * @return Concatenation of all items of this.
      */
    join (aSeparator?: string): string

    /**
      * @param aStart
      *     Zero-based index at which to begin the slice.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @param aEnd
      *     Zero-based index at which to end the slice.
      *     As a negative index; it indicates an offset from the end.
      *     Default: this.length - 1
      * @return New array from `aStart' until `aEnd'.
      */
    slice (aStart?: number, aEnd?: number): MutableTypeableArray<T>

    /**
      * @param aItem
      *     Element to locate.
      * @param aIndex
      *     Zero-based index at which to start searching forwards.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @return Index of `aItem' or `-1' if not found.
      */
    indexOf (aItem: T, aIndex?: number): number

    /**
      * @param aItem
      *     Element to locate.
      * @param aIndex
      *     Zero-based index at which to start searching backwards.
      *     As a negative index; it indicates an offset from the start.
      *     Default: this.length - 1
      * @return Index of `aItem' or `-1' if not found.
      */
    lastIndexOf (aItem: T, aIndex?: number): number

    /**
      * @param aPred prdicate to test on the items
      * @param aTarget Value to use as this when calling `aPred'
      * @return Is `aPred' satisfied by all items?
      */
    every (aPred:
        (this: void, aItem: T, aIndex: number, aArray: TypeableArray<T>) => boolean,
        aTarget?: undefined): boolean
    every <Z> (aPred:
        (this: Z, aItem: T, aIndex: number, aArray: TypeableArray<T>) => boolean,
        aTarget: Z): boolean

    /**
      * @param aPred prdicate to test on the items
      * @param aTarget Value to use as this when calling `aPred'
      * @return Is `aPred' satisfied by atleast one item?
      */
    some (aPred:
        (this: void, aItem: T, i: number, aArray: TypeableArray<T>) => boolean,
            aTarget?: undefined): boolean
    some <Z> (aPred:
        (this: Z, aItem: T, i: number, aArray: TypeableArray<T>) => boolean,
        aTarget: Z): boolean

    /**
      * @param aConsumer Function to run for each item.
      * @param aTarget Value to use as this when calling `aConsumer'.
      */
    forEach (aConsumer:
        (this: void, aItem: T, i: number, aArray: TypeableArray<T>) => void,
        aTarget?: undefined): void
    forEach <Z> (aConsumer:
        (this: Z, aItem: T, i: number, aArray: TypeableArray<T>) => void,
        aTarget: Z): void

    /**
      * @param aMapper Function that produces an item of the new array.
      * @param aTarget Value to use as this when calling `aMapper'.
      * @return New array mapping each item with `aMapper'.
      */
    map <U> (aProducer:
        (this: void, aItem: T, i: number, array: TypeableArray<T>) => U,
        aTarget?: undefined): MutableTypeableArray<U>
    map <U, Z> (aProducer:
        (this: Z, aItem: T, i: number, array: TypeableArray<T>) => U,
        aTarget: Z): MutableTypeableArray<U>

    /**
      * @param aPred Function to test each element of the array.
      * @param aTarget Value to use as this when calling `aPred'.
      * @return New array with all items satisfying `aPred'.
      */
    filter (aPred:
        (this: void, aItem: T, i: number, aArray: TypeableArray<T>) => boolean,
        aTarget?: undefined): MutableTypeableArray<T>
    filter <Z> (aPred:
        (this: Z, aItem: T, i: number, aArray: TypeableArray<T>) => boolean,
        aTarget: Z): MutableTypeableArray<T>

    /**
      * @param aReducer Function to run for each item.
      * @param aInitial Intial value for `aPrev' in thefirst call to `aReducer'.
      * @return Result of the reduction of the entire array.
      */
    reduce (aReducer:
        (aPrev: T, aItem: T, i: number, aArray: TypeableArray<T>) => T,
        aInitial?: T): T

    /**
      * @param aReducer Function to run for each item.
      * @param aInitial Intial value for `aPrev' in thefirst call to `aReducer'.
      * @return Result of the reduction of the entire array.
      */
    reduce <U> (aReducer:
        (aPrev: U, aItem: T, i: number, aArray: TypeableArray<T>) => U,
        aInitial: U): U

    /**
      * @param aReducer Function to run for each item.
      * @param aInitial Intial value for `aPrev' in thefirst call to `aReducer'.
      * @return Result of the backwards reduction of the entire array.
      */
    reduceRight (aReducer:
        (aPrev: T, aItem: T, i: number, aArray: TypeableArray<T>) => T,
        aInitial?: T): T

    /**
      * @param aReducer Function to run for each item.
      * @param aInitial Intial value for `aPrev' in thefirst call to `aReducer'.
      * @return Result of the backwards reduction of the entire array.
      */
    reduceRight <U> (aReducer:
        (aPrev: U, aItem: T, i: number, aArray: TypeableArray<T>) => U,
        aInitial: U): U

     /**
      * @param aPred Function to run on each value in the array
      * @param aTarget Value to use as this when calling `aPred'.
      * @return An item that satisfies `aPred' or undefined if none.
      */
    find (aPred:
        (this: void, aItem: T, i: number, aArray: TypeableArray<T>) => boolean,
        aTarget?: undefined): T | undefined
    find <Z> (aPred:
        (this: Z, aItem: T, i: number, aArray: TypeableArray<T>) => boolean,
        aTarget: Z): T | undefined

     /**
      * @param aPred Function to run on each value in the array
      * @param aTarget Value to use as this when calling `aPred'.
      * @return Index of an item that satisfies `aPred' or -1 if none.
      */
    findIndex (aPred: (this: void, aItem: T) => boolean,
        aTarget?: undefined): number
    findIndex <Z> (this: Z, aPred: (aItem: T) => boolean, aTarget: Z): number

    /**
      * @return (key, value) pairs for every entry in the array.
      */
    entries (): IterableIterator<[number, T]>

    /**
      * @return Keys of the array.
      */
    keys (): IterableIterator<number>

    /**
      * @return Values of the array.
      */
    values (): IterableIterator<T>

    /**
     * @param n Zero-based index of the item to retrieve
     * @return Item attached to `n'.
     */
    readonly [n: number]: T

}

/**
 * Mutable typed or untyped array
 */
interface MutableTypeableArray <T> extends TypeableArray<T> {

    /**
      * @param aTarget
      *     Zero-based index at which to copy the slice aStart .. aEnd.
      *     As a negative index; it indicates an offset from the end.
      * @param aStart
      *     Zero-based index at which to start copying item from.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @param aEnd
      *     Zero-based index at which to end copying item from.
      *     As a negative index; it indicates an offset from the end.
      *     Default: this.length - 1
      * @param this
      */
    copyWithin (aTarget: number, aStart: number, aEnd?: number): this

    /**
      * Mutation: Replace items from `aStart' until `aEnd' with `aItem'.
      * @param aItem
      * @param aStart
      *     Zero-based index at which to start replacing.
      *     As a negative index; it indicates an offset from the end.
      *     Default: 0
      * @param aEnd
      *     Zero-based index at which to end replacing.
      *     As a negative index; it indicates an offset from the end.
      *     Default: this.length - 1
      * @return this
      */
    fill (aItem: T, aStart?: number, aEnd?: number): this

    /**
      * Mutation: Reverse the order of the items.
      * @return this
      */
    reverse (): this

    /**
      * Mutation: Sort the array
      * @param a3wayComparator Three-way-comparator.
      * @return this
      */
    sort (a3wayComparator?: (a: T, b: T) => number): this

    /**
     * @param n Zero-based index of the item to retrieve
     * @return Item attached to `n'.
     */
    [n: number]: T

}


interface TypeableArrayConstructor <T> {

    new (aLength: number): MutableTypeableArray<T>

    /**
     * @param aRef An array-like object to convert to an array.
     * @param aConverter A mapping function to call on all tems of the array.
     * @param aTarget Value used as this to call `aConverter'.
     * @return New array from `aRef'.
     */
    from <U> (aRef: ArrayLike<U>,
            aConverter: (this: void, v: U, k: number) => T,
            atarget?: undefined): MutableTypeableArray<T>
    from <U, Z> (aRef: ArrayLike<U>,
            aConverter: (this: Z, v: U, k: number) => T,
            atarget: Z): MutableTypeableArray<T>

    /**
     * @param aRef An array-like object to convert to an array.
     * @return New array from `aRef'.
     */
    from (aRef: ArrayLike<T>): MutableTypeableArray<T>

    /**
     * @param aItems Set of items to include.
     * @return New array from `aItems'.
     */
    of (...aItems: T[]): MutableTypeableArray<T>

    readonly prototype: MutableTypeableArray<T>

}

