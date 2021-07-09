/*********
 * Javascript class:
 * Class is a blue print of template, used to create an object.
 *
 * Class is a special function, and just you can define function declaration
 * and function expression.
 *
 * note:
 * 1. Class body execute in strict mode.
 * 2. Class can not be hoisted, it throws a ReferenceError
 *
 * Class syntax has to coponents:
 * 1. Class declaration
 * 2. Class expression
 *
 *
 * 1. Class declaration:
 *    class Person{
 *      constructor(name,age){
 *        this.name=name;
 *        this.age=age;
 *      }
 *    }
 *
 * 2. Class expression:
 *    A class expression is another way to define a class. Class expressions can be named or unnamed.
 *
 *    const Person = class {
*      constructor(name,age){
 *        this.name=name;
 *        this.age=age;
 *      }
 *    }
 *
 *    or
 *
 *    const Person = class PersonBody{
*      constructor(name,age){
 *        this.name=name;
 *        this.age=age;
 *      }
 *    }
 *
 *
 * Constructor:
 * It is a special method to create and initialize the object. there is only one constructor method.
 * It can use the super keyword to call the constructor of the super class.
 *
 *
 * Prototype method:
 * class Person{
 *      constructor(name,age){
 *        this.name=name;
 *        this.age=age;
 *
 *        // instance method
 *        this.detail=function(){return this}
 *      }
 *
 *      // prototype method
 *       getName(){
 *       return this.name
 *       }
 * }
 *
 *
 * Static method:
 * static keyword define a static method or property for a class.
 * static members (properties and method) are access by class not instance.
 *
 * 
 */


// static example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return ` ${this.name} can speak`;
  }

  static detail() {
    return `my name is ${this.name} and im am ${this.age} years old`
  }
}

// it convert into this behind the scenes
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function () {
  return ` ${this.name} can speak`;
}

Person.detail = function (obj) {
  return `my name is ${obj.name} and im am ${obj.age} years old`
}

/**
 * Public field declaration:
 *
 * class Ractangle{
 *    width;
 *    height=0;
 *    constructor(width,height){
 *      this.width=width;
 *      this.height=height;
 *    }
 * }
 *
 * or
  * class Ractangle{
 *    width=0;
 *    height=0;
 *    constructor(){
 *
 *    }
 * }
 */


/**
 * Private field declaration:
 * Class fields are public by default, but private class members can be created by using a hash # prefix.
 * The privacy encapsulation of these class features is enforced by JavaScript itself.
 *
 * class Ractangle{
 *    #width;
 *    #height=0;
 *    constructor(width,height){
 *      this.#width=width;
 *      this.#height=height;
 *    }
 * }
 *
 */

/**
 * Subclass with extends: inheritance
 * The extends keyword is used in class declarations or class expressions to create a class as a child of another class.
 *
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} can speak`;
  }

  eat() {
    return `${this.name} can eat`;
  }

  sleep() {
    return `${this.name} can sleep`;
  }

}


class Dog extends Animal {
  constructor(bread) {
    this.bread = bread;
  }

  // method overriding
  speak() {
    console.log('method overriding')
  }

  // call super class method
  eat() {
    super.eat();
  }

}


const d = new Doc("Pamerian");


/**
 * Mix-ins:
 * 1. Abstract subclasses or mix-ins are templates for classes.
 * 2. An ECMAScript class can only have a single superclass.
 * 3. So multiple inheritance from tooling classes, for example, is not possible.
 *    The functionality must be provided by the superclass.
 */