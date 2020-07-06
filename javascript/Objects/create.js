/**
 * Object.create(): use to create an object using an existing object as prototype
 */

// Syntax
// Object.create(proto, [propertiesObject])

// Example
const user = {
    name: 'Pradeep',
    age: 30,
    salary: 5000
}

const obj = Object.create(null);
obj.name = "Hello"



/**
 * Node:
 * 1. proto can be null or an Object
 * 1. if proto is neither of these a TypeError is
 */



/**
 * Classical inheritance with Object.create()
 * We can achieve classical inheritance with Object.create() via using object.call(this)
 * Example:
 */

function Shape(x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function () {
    console.log(this.x, this.y);
}

const s = new Shape(1, 2);

function Ractangle(x, y) {
    Shape.call(this, x, y);
}

Ractangle.prototype = Object.create(Shape)
Ractangle.prototype.constructor = Ractangle
const r = new Ractangle(3, 4)


/**
 * Object.create() pollyfill
 */


