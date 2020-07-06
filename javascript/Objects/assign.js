/**
 * Object.assign:
 * 1. Method copies all "enumerable own properties" from one or more source objects to a target object.
 * 2. Properties in the target object are overwritten by properties in the sources if they have the same key.
 * 3. The Object.assign() method only copies enumerable and own properties from a source object to a target object
 * 4. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters
 * 5. Target object can not be null or undefined, if it is then it throws typeError.
 *
 * Syntax:
 * Object.assign(targetObject, ...sourceObjects);
 *
 */

/**
 * Write pollyfill for es5,
 * Steps:
 * 1. Check object.assign is function
 * 2. add assign property to an object
 * 3. Writable, configurable property should be true, enumrable false
 * 4. Value take function with target, and source arguments
 * 5. check target is not null or undefined
 * 6. assign target to a variable
 * 7. loop through the arguments object
 * 8. assign argument object to new variable
 * 9. check this variable no to be null or undefined
 * 10. loop through the new variable and assign keys to target variable
 * 11. return target variable
 */


if (typeof Object.assign !== "function" || true) {
    Object.defineProperty(Object, "assign", {
        writable: true,
        configurable: true,
        value: function (target) {
            if (target === null || target === undefined) {
                throw new TypeError("Can not convert null or undefined to an object")
            }
            let to = Object(target); // {}
            console.log('to', to)
            for (let index = 1; index < arguments.length; index++) {
                let next = arguments[index];
                console.log('next', next)
                if (next !== null && next !== undefined) { // {name:'pradeep', age:20}
                    for (let key in next) {
                        console.log('key', key)
                        if (Object.prototype.hasOwnProperty.call(next, key)) {
                            to[key] = next[key]
                        }
                    }
                }
            }
            return to;
        }
    })
}

/**
 * Note:
 * 1. Object.assign can not use for deep cloaning, it used for shallow coppy.
 * 2. Properties on the prototype chain and non-enumerable properties cannot be copied.
 * 3. Primitives will be wrapped to objects.
 *      a. number, null or undefined will be ingnored
 *      b. only string wrappers can have own enumerable properties
 */

const s = Object.assign({}, 10) 
