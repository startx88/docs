/**
 * Object.defineProperty():
 * It is used to defines new or modifies existing property directly on an object.
 * Syntax:
 * Object.defineProperty(object,prop,descriptor )
 */
const obj = {};

Object.defineProperty(obj, "name", {
    value: 'pradeep',
    configuratble: true,
    enumrable: true,
    writable: true
});


console.log(obj)