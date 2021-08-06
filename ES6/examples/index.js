const x = { name: 'pradeep' }

console.log(x.constructor.name); // => Object
console.log(x.constructor.prototype); // => Object.prototype 
console.log(x.constructor.prototype == Object.prototype); // => true
console.log(Object.prototype.constructor); // => true
console.log(x.__proto__ == Object.prototype); // => true
console.log(x.__proto__)
console.log(x.__proto__.__proto__); // => true

console.log(x.hasOwnProperty('name')); // => true
console.log(x.hasOwnProperty('constructor')); // => false
console.log(x.hasOwnProperty('__proto__')); // => false
console.log(Object.prototype.hasOwnProperty('constructor')); // => true
console.log(Object.prototype.hasOwnProperty('__proto__')); // => true
console.log(Object.prototype.hasOwnProperty('isPrototypeOf')); // => false

console.log(Object instanceof Object); // => true
