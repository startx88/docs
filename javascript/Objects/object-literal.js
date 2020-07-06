/**
 * How many ways to create javascript object.
 * 1. Using literal syntacx
 *      ex: const user={name:'pradeep', age:31}
 *
 * 2. Using Object constructor
 *      ex: const user = new Object(); create empty object
 *
 * 3. Using Object.create() method create an object,
 *    using an existing object as prototype to the newly created object.
 *    if object.create(null) then there is no prototype property
 *
 * 4. Using function constructor
 *    const user = function(name, age){ let obj = {}; obj.name=name, obj.age=age; return obj}
 */

/**
 * Object literal: it is the easiest way to create an object.
 * Object is the combination of function + object
 * at run time js engine add the __proto__ object and type is Object
 * which has some default properties:
 * 1. constructor: f Object
 * 2. hasOwnProperty
 * 3. propertyIsEnumerable
 * 4. toString
 * 5. valueOf
 * 6. toLocalString
 * 7. get
 * 8. set
 * 9. isPrototypeOf
 * 10. defineProperty
 */

/**
 * Property Object.prototype.constructor
 * 1. arguments.
 * 2. callee.
 * 3. length
 * 4. name
 * 5. prototype
 * 6. assign
 * 7. getOwnPropertyName
 * 8. getOwnPropertyDiscriptor
 * 9. getOwnPropertyDisctriptors
 * 10. getOwnPropertySymbols
 * 11. is
 * 12. seal
 * 13. freeze: ƒ freeze()
 * 14. seal: ƒ seal()
 * 15. create: ƒ create(
 * 16. defineProperties: ƒ
 * 17. defineProperties()
 * 18. getPrototypeOf
 * 19. setPrototypeOf
 * 20. isFrozen
 * 21. isSealed
 * 22. keys
 * 23. values
 * 24. entries: ƒ entries()
 * 25. fromEntries: ƒ fromEntries()
 * 26. isExtensible: ƒ isExtensible()
 * 27. values: ƒ values()
 */


/**
 * Javascript value properties:
 * 1. Infinity
 * 2. NaN
 * 3. undefined
 * 4. null
 * 5. globalThis
 */

/**
 * Function Properties:
 * 1. eval()
 * 2. uneval()
 * 3. isFinite()
 * 4. isNaN()
 * 5. parseFloat()
 * 6. parseInt()
 * 7. decodeURI()
 * 8. decodeURIComponent()
 * 9. encodeURI()
 * 10. encodeURIComponent()
 */

/**
 * The decodeURI: this function decodes a Uniform Resource Identifier (URI)
 * previously created by encodedURI() or by a similar routine.
 */

/**
 * Fundamental Object:
 */

/**
 * Shallow copy and deep copy in js:
 * 1. Shallow copy methods
 *    a. arr1.slice(0)
 *    b. arr1.concat(arr2)
 *    3. spread operator
 *    4. Object.create({},obj)
 *    5. Object.assign({},obj)
 *    6. Array.from(arr1)
 * 2. Deep copy methods
 *    a. JSON.parse(JSON.stringify(obj))
 *    b. Service workers postMessage() onmessage
 *    c. History API history.pushState(obj,title) history.state
 *    d. Notification api new Notification("title",{data:obj}).data
 *    5. Build a custom recursive function
 */


/**
 * Object.create(): method creates a new object, using an existing object as the prototype of the newly created object.
 */


/**
 * Object.getOwnPropertyDiscriptor():
 * Object.getOwnPropertyDiscriptors():
 * Both method used to returns a property descriptor for an own property, directly present on an object not in prototype
 *
 * Object.defineProperty();
 * Object.defineProperties();
 *
 * Property discriptor divide into two groups:
 * 1. Data discriptors
 * 2. Accessor discriptors.
 *
 * 1. Data discriptors has below properties:
 *    a. enumrable
 *    b. configurable
 *    c. writable
 *    d. value
 *
 * 1. Accessor discriptors has below properties:
 *    a. enumrable
 *    b. configurable
 *    c. get
 *    d. set
 */

/**
 * Object.entries():
 *
 */

/**
 *
 *
 */