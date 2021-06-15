/********
 * What is coercion: Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.
 * Info: This includes conversion from Number to String, String to Number, Boolean to Number etc
 *
 * Abstarct Operation:
 * 1. toPrimitive()
 * 2. toString()
 * 3. toBoolean()
 *
 *
 * First abstract operation call toPrimitive
 * We don't have primitive we need to turn it primitive we have something like non-primitive.
 * like: on of the object type to make it primitve this is asbstract operation.
 *
 * it is conceptual operation.
 * toPrimitive:
 *
 *
 * There are two method available in non-primitve (object, array, function);
 * 1. "number" =====> valueOf(), toString()
 * 2. "string" =====> toString(), valueOf()
 *
 *
 * toString: on primitive type
 *
 * false.toString() => "false"
 * true.toString() => "true"
 * undefined.toStrng() => "undefined"
 * null.toString() => "null"
 * 0.toString() => "0"
 * -0.toString() => "0"
 *
 * toString: on reference type
 *
 * [].toString() => ""
 * [1,2,3].toString() => "1,2,3"
 * [null,undefined].toString() => ","
 * [[[],[],[]].toString() => ",,,"
 * [,,,].toString() => ",,,"
 *
 * {}.toString() => "[object Object]"
 * {a:2}.toString() => ["object Object"]
 *
 *
 *
 * toNumber: on primitive type
 * Number("") => 0
 * Number("0") => 0
 * Numebr("-0") => 0
 * Number(" 0009 ") => 9
 * Number("3.456") => 3.456
 * Number("0.") => 0
 * Number(".0") => 0
 * Number(".") => NaN
 * Number("0xaf") => 175
 * Number(false)=> 0
 * Number(true)=> 1
 * Number(null) => 0
 * Number(undefined)=>NaN
 *
 * Number([]) => 0
 *
 *
 *
 * toBoolean: below are falsy value
 * 1. false
 * 2. null
 * 3. undefined
 * 4. ""
 * 5. 0
 * 6. -0
 * 7. NaN
 *
 *
 */
