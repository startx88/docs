/**
 * Object.defineProperty():
 * It is used to defines new or modifies existing property directly on an object.
 * 
 * 
 */
const obj = {};

Object.defineProperty(obj, "name", {
    value: 'pradeep',
    configuratble: true,
    enumrable: true,
    writable: true
});


/**
 * Syntax:
 * Object.defineProperty(object,prop,descriptor)
 */



/**
 * Property descriptor present in an object come in two main flavors:
 * 1. Data discriptors
 * 2. Accessor discriptors
 *
 * 1. Data discriptor: it has value, which may or may not be writable
 * 2. Accessor discriptor: it is a property described by a getter-setter functions.
 *
 * Note:
 * discriptor must be one of these two flavors; it can not be both
 * Both data and accessor discriptor are bojects
 *
 * Default value:
 * 1. configuratble: false, true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object
 * 2. enumrable: false, true if and only if this property shows up during enumeration of the properties on the corresponding object.
 *
 * Data discriptors:  A data descriptor also has the following optional keys:
 * 1. Value: can be any valid javascript value, number, object, function, Default value is undefined.
 * 2. writable: true if and only if the value associated with the property may be changed with an assignment operator, Default is false
 *
 * Accessor discriptors: An accessor descriptor also has the following optional keys:
 * 1. get: A function which serves as a getter for the property, or undefined if there is no getter.
 * 2. set: A function which serves as a setter for the property, or undefined if there is no setter
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