/**
 * EEMAScript is object based:
 *
 * Global Objects:
 * 1. global object refere into the object in global scope.
 * 2. Global object itself can be accessed using the this operator in the global scope.
 * 3. Global scope consists of the properties of the global object.
 * 4. Other object in the global scope are either created by the user script or provided by host application.
 * 5. The host object available in the browser context.
 *
 *
 * Properties of global object:
 * 1. Infinity
 * 2. NaN
 * 3. Undefined
 * 4. globalThis
 *
 * ** Infinity **
 * 1. It is a property of the global object.
 * 2. In other words, it is a variable in global scope.
 *
 * The initial value of Infinity is Number.POSITIVE_INIFINITY
 * 1. Number.POSITIVE_INIFINITY property represents the positive inifinity value.
 *
 * Cases:
 * 1. any positive value, including POSITIVE_INIFINITY, multiplied by POSITIVE_INITIFY retun POSITIVE_INIFINITY.
 * 2. any negative value, including NEGATIVE_INIFINITY, multiplied by NEGATIVE_INITIFY retun NEGATIVE_INIFINITY.
 * 3. any positive number divided by POSITIVE_INIFINITY return positve zero.
 * 4. any negative number divided by NEGATIVE_INIFINITY return negative zero.
 * 5. Zero multiplied by POSITIVE_INFINITY is NaN.
 * 6. NaN multiplied by POSITIVE_INFINITY is NaN.
 * 7. POSITIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is NEGATIVE_INFINITY.
 * 8. POSITIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is POSITIVE_INFINITY.
 * 9. POSITIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN
 *
 *
 * ** NaN **
 * The global NaN property is a value representing Not-A-Number (or invalid number)
 * 1. It is a property of the global object.
 * 2. In other words, it is a variable in global scope.
 *
 * The initial value of NaN is Not-A-Number.
 * In Modern browser NaN is a non-configuratble, not-writable property.
 *
 * There are five different types of operations that return NaN.
 * 1. Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
 * 2. Math operation where the result is not a real number (e.g. Math.sqrt(-1))
 * 3. Operand of an argument is NaN (e.g. 7 ** NaN)
 * 4. Indeterminate form (e.g. 0 * Infinity)
 * 5. Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)
 *
 * 1. Object
 * 2. Array
 * 3. Function
 * 4. String
 * 5. Number
 * 6. Date
 * 7. RegExp
 * 8. Error objects: Error, EvalError, RangeError, ReferenceError, Syntax Error, TypeError, URIError
 * 9. JSON
 * 10. Boolean
 *
 */