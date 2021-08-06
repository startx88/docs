/**
 * Prototype design pattern:
 *
 * 1. Complicated objects (e.g. cars) are'nt designed from scratch
 *    a. They reiterate existing desgins.
 * 2. An existing (partially or fully constructed) design is a Prototype.
 * 3. We make a copy (clone) the prototype and customize it.
 *    a. Requires deep copy support.
 * 4. We make a cloning convenient (e.g. via a Factory).
 *
 *
 * A partially of Fully initialized object that you copy (clone) and make use of.
 *
 *
 * */

class Address {
  constructor(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

class Person {
  constructor(name, address) { this.name = name; this.address = address; }
  toString() {
    return `name is ${this.name} and address is ${this.address.street} city is ${this.address.city}`;
  }
}


let john = new Person('John', new Address('123 Main St.', 'Anytown', 'CA', '12345'));
let jane = JSON.parse(JSON.stringify(john));

jane.name = 'Jane';
jane.address.city = 'Newtown';
