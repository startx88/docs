/*******
 * Singleton design pattern:
 * A component instantiate only once.
 *
 * Singletons are useful in situations where system-wide actions need to be coordinated from a single central place.
 *
 * An example is a database connection pool.
 * The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.
 *
 * Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.
 * The Module pattern (see our Dofactory JS product) is JavaScript's manifestation of the Singleton pattern.
 *
 * diagram:
 *    getInstance()
 *            - singleton
 *
 *
 * */

class Singleton {
  constructor() {
    let instance = this.constructor.instance;
    if (instance) { return instance };
    this.constructor.instance = this;
  }

  foo() {
    console.log('doing something....');
  }
}

// instance
const s1 = new Singleton();
const s2 = new Singleton();
console.log(`Are they identical? ` + (s1 === s2));
s2.foo();

/**
 * Monostate pattern:
 * 
 *
 * */
class ChiefExecutiveOfficer {
  get name() { return ChiefExecutiveOfficer._name }
  set name(value) { ChiefExecutiveOfficer._name = value }
  get age() { return ChiefExecutiveOfficer._age }
  set age(value) { ChiefExecutiveOfficer._age = value }
  toString() {
    return `CEO's name if ${this.name} and age is ${this.age} `;
  }
}

// all data will be shae in the single instance
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

let ceo = new ChiefExecutiveOfficer();
ceo.age = 40;
ceo.name = 'John';

let ceo2 = new ChiefExecutiveOfficer();
ceo2.age = 45;
ceo2.name = 'Jane';

console.log(ceo.toString());
console.log(ceo2.toString());



/**
 * Singleton pattern problem
 * |
 *
 * */