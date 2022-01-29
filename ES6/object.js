/**
 * Deep dive in javscript object:
 * 
 * Introduction: 
 * An object is a collection of properties and a property is associated between a name (or key) and a value.
 * a property value can be function, in which case the property known as method.
 *
 * Each property is either a named data property, a named accessor property, or an internal property:
 * 
 * 
 * How many ways to create an object: 
 * 1. Using literal syntax.
 * 2. Using object initializer (Object).
 * 3. Using object.create.
 * 4. Using factory function.
 * 5. Using Function constructor.
 * 6. Using classes
 *
 */

// create object using literal syntax
const user = { name: "pradeep", age: 22 } // new Object({ name: "pradeep", age: 22 })
/**
 * 1. user is instanceof object.
 * user has own property and its prototype property like:
 * 1. constructor: Object
 * 2. isPrototypeOf
 * 3. hasOwnProperty
 * 4. propertyIsEnumerable
 * 5. toString() => return "[object Object]"
 * 6. toLocalString() => return "[object Object]""
 * 7. valueOf()=> return object
 *
 * Prototype property:
 * 1. constructor: Object=>reurn {}, it point to the Object
 * 2. hasOwnProperty:Function(key)=> return true/false
 * 3. isPrototTypeOf:Function(obj) => return true/false
 * 4. propertyIsEnumerable:Function(key) => return true/false
 * 5. toString:Function=> return "[object Object]"
 * 6. toLocalString:Function => return "[object Object]"
 * 7. valueOf:Function=>return object
 *
 *
 * delete property use delete key name
 * ex: delete user.name
 *
 *
 * Object has some static methods:
 * 1. assign:function(target, ...sources) => return object
 * 2. create:function(object||null, descriptors) => return object with prototype of without prototype, use for inheritance
 * 3. defineProperty: Adds the named property described by a given descriptor to an object.
 * 4. Object.defineProperties: Adds the named properties described by the given descriptors to an object.
 *
 */

// Object initializer
// const user = new Object() // return {} object
// user.name = "pradeep";
// user.age = 22;














// recuresivly deep freeze
// function FreezeObject(obj) {
//   const newObject = Object.freeze(obj);
//   for (let i in newObject) {
//     if (typeof newObject[i] == "object") {
//       i = FreezeObject(newObject[i])
//     }
//   }
//   return newObject;
//}

// using array


// Favor composition over inheritance

function createUser(name) {
  return {
    name
  }
}

const x = createUser('Pradeep')
console.log(x)
console.dir(createUser.constructor)

const y = new Function('x', `this.name=x; return this.name;`);
console.log(y.constructor)