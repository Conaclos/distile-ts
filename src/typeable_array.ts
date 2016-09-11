

/**
 * Typed or untyped array
 */
interface TypeableArray <T> extends ArrayLike<T> {

    [Symbol.iterator] (): IterableIterator<T>

    /**
      * Returns a string representation of an array.
      */
    toString (): string
    toLocaleString (): string

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
      */
    join (separator?: string): string

    /**
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
    slice (start?: number, end?: number): MutableTypeableArray<T>

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    indexOf (searchElement: T, fromIndex?: number): number

    /**
      * Returns the index of the last occurrence of a specified value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
      */
    lastIndexOf (searchElement: T, fromIndex?: number): number

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    every (callbackfn: (value: T, index: number, array: TypeableArray<T>) => boolean, thisArg?: any): boolean

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    some (callbackfn: (value: T, index: number, array: TypeableArray<T>) => boolean, thisArg?: any): boolean

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    forEach (callbackfn: (value: T, index: number, array: TypeableArray<T>) => void, thisArg?: any): void

    /**
      * Calls a defined callback function on each element of an array, and returns an array that contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    map<U> (callbackfn: (value: T, index: number, array: TypeableArray<T>) => U, thisArg?: any): MutableTypeableArray<U>

    /**
      * Returns the elements of an array that meet the condition specified in a callback function.
      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
    filter (callbackfn: (value: T, index: number, array: TypeableArray<T>) => any, thisArg?: any): MutableTypeableArray<T>

    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduce (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: TypeableArray<T>) => T, initialValue?: T): T

    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduce<U> (callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: TypeableArray<T>) => U, initialValue: U): U

    /**
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduceRight (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: TypeableArray<T>) => T, initialValue?: T): T

    /**
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    reduceRight<U> (callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: TypeableArray<T>) => U, initialValue: U): U

    /**
      * Returns the value of the first element in the array where predicate is true, and undefined
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending
      * order, until it finds one where predicate returns true. If such an element is found, find
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of
      * predicate. If it is not provided, undefined is used instead.
      */
    find (predicate: (value: T, index: number, obj: TypeableArray<T>) => boolean, thisArg?: any): T | undefined

    /**
      * Returns the index of the first element in the array where predicate is true, and undefined
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending
      * order, until it finds one where predicate returns true. If such an element is found,
      * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
      * @param thisArg If provided, it will be used as the this value for each invocation of
      * predicate. If it is not provided, undefined is used instead.
      */
    findIndex (predicate: (value: T) => boolean, thisArg?: any): number

    /**
      * Returns an array of key, value pairs for every entry in the array
      */
    entries (): IterableIterator<[number, T]>

    /**
      * Returns an list of keys in the array
      */
    keys (): IterableIterator<number>

    /**
      * Returns an list of values in the array
      */
    values (): IterableIterator<T>

}

/**
 * Mutable regular array (typed or untyped array)
 */
interface MutableTypeableArray <T> extends TypeableArray<T> {

    /**
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the
      * length of the array.
      * @param start If start is negative, it is treated as length+start. If end is negative, it
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value.
      */
    copyWithin (target: number, start: number, end?: number): this

    /**
      * Returns the this object after filling the section identified by start and end with value
      * @param value value to fill array section with
      * @param start index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param end index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      */
    fill (value: T, start?: number, end?: number): this

    /**
      * Reverses the elements in an Array.
      */
    reverse (): MutableTypeableArray<T>

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
      */
    sort (compareFn?: (a: T, b: T) => number): this

    [n: number]: T

}


interface TypeableArrayConstructor <N> {

    new (aLength: number): MutableTypeableArray<N>

    /**
     * @param aRef An array-like object to convert to an array.
     * @param aConverter A mapping function to call on every element of the array.
     * @param aTarget Value of 'this' used to invoke the mapfn.
     * @return Typeable array from `aRef'
     */
    from <T, U> (aRef: ArrayLike<T> | Iterable<T>,
            aConverter: (v: T, k: number) => U,
            atarget?: any): MutableTypeableArray<T>

    /**
     * @param aRef An array-like object to convert to an array.
     * @return Typeable array from `aRef'
     */
    from <T> (aRef: ArrayLike<T> | Iterable<T>): MutableTypeableArray<T>

    /**
     * Returns a new array from a set of elements.
     * @param items A set of elements to include in the new array object.
     */
    of <T> (...items: T[]): MutableTypeableArray<T>

    readonly prototype: MutableTypeableArray<N>

}

export {TypeableArray, MutableTypeableArray, TypeableArrayConstructor}

