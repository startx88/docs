/**
 * LSP (Liskov Substitution Principle):
 * "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."
 * https://www.geeksforgeeks.org/liskov-substitution-principle-in-javascript/
 *
 *
 * The Object of superclass shall be replcable with object of subclass without altering the correctness of the program.
 *
 *
 * */

// class Rectangle {
//   constructor(width, height) {
//     this.type = this.constructor.name;
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   toString() {
//     return `${this.type}: ${this.width} x ${this.height} = ${this.width * this.height}`;
//   }
// }

// const r = new Rectangle(2, 5);
// console.log(r.toString());


// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// const s = new Square(5);
// s.width = 10;
// console.log(s.toString()); // here Square is not correct we are breaking the rule of LSP


// here we are not breaking the rule of LSP
// re-write it again

class Rectangle {
  constructor(width, height) {
    this.type = this.constructor.name;
    this._width = width;
    this._height = height;
  }

  get width() { return this._width; }
  set width(value) { this._width = value; }

  get height() { return this._height; }
  set height(value) { this._height = value; }

  getArea() {
    return this._width * this._height;
  }

  toString() {
    return `${this.type}: ${this._width} x ${this._height} = ${this._width * this._height}`;
  }
}


class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  // get width() { return this._width; }
  // get height() { return this._height; }

  set height(value) { this._height = this._width = value; }
  set width(value) { this._height = this._width = value; }

}

// rectanle
// const r = new Rectangle(2, 5);
// console.log(r.toString());
// r.width = 9;
// console.log(r.toString());

// // square
// const s = new Square(5);
// console.log(s.toString());
// s.width = 10;
// console.log(s.toString());

// suppose we have a function which takes a base class as parameter
// so this will completely break the LSP
// see below example

const useIt = function (base) {
  //let width = base.width; if no getter in subclass it will be NaN, get does not propogate from base class
  let width = base._width;
  base.height = 10;
  console.log(`expacted area of ${10 * width} got  ${base.getArea()}`);
}
const r = new Rectangle(2, 5);
useIt(r);

const s = new Square(5);
useIt(s);





const SpeciesType = Object.freeze({
  Animal: 'animal',
  Human: 'human',
  Bird: 'bird'
})

class Species {
  constructor(type, name, speed) {
    this.type = type;
    this.name = name;
    this.speed = speed;
  }

  eat() {
    console.log(`${this.type} - ${this.name} can eat`);
  }

  run() { 

  }

  fly() {  

  }

  swim() { 

  }
}