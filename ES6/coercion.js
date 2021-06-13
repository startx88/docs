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
 */
