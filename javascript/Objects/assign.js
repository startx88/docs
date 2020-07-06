/**
 * What is Object.assign:
 * Object.assign copy all enumrable properties form on or more source object to a target object and return the target object.
 * Ex:1
 */

/**
 * Syntax:
 * Object.assign(target, source)
 */

const obj = {
    name: "Pradeep",
    age: 30,
    salary: 40000,
    email: "arya.creativemind@gmail.com"
}

//const target = Object.assign({}, obj);

/**
 * Importants:
 * 1. Properties in the target object are overwritten by properties in the sources if the have the save key.
 * 2. Object.assign() copy only enumrable and own properties from source to target object.
 * 3. it use [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters
 */


const obj1 = Object.create(obj);


const target = Object.assign({}, obj1);
target.name = "PPP"
console.log(target)
// result will be {} object

/**
 * Write pollyfill, es5 does not support symbols
 */

if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            'use strict';
            if (target === null || target === undefined) {
                throw new TypeError('can not convert null and undefined into an object')
            }
            var to = Object(target);

            for (let index = 1; index < arguments.length; i++) {
                var nextSource = arguments[index];
                for (let nextKey in nextSource) {
                    if (nextSource !== null && nextSource !== undefined) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: false
    })
}



