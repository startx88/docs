/*******
 * Factory design pattern:
 * A component responsible solely for the wholesale (not piecewise) creation of object.
 *
 * 
 *
 * */


let ConrdinateSystem = {
  cartesian: 0,
  polar: 1
}

class Point {
  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
  // here js does not support multiple constructors, this code will not work
  // so how to define multiple constructors in javascript?
  // constructor(rho, theta) {
  //   this.x = rho * Math.cos(theta);
  //   this.y = rho * Math.sin(theta);
  // }


  // use like this:
  // constructor(a, b, cs = ConrdinateSystem.cartesian) {
  //   switch (cs) {
  //     case ConrdinateSystem.cartesian:
  //       this.x = a;
  //       this.y = b;
  //       break;
  //     case ConrdinateSystem.polar:
  //       this.x = a * Math.cos(b);
  //       this.y = a * Math.sin(b);
  //       break;
  //     default:
  //       throw new Error('Unknown coordinate system');
  //   }
  // }
  // but this is not a perfect implementation
  // because we need to specify the coordinate system
  // so we can't use this constructor in other places
  // so we need to use the factory pattern
  // support we want to add new cordinate system then we need to another case.
  // it vilates the open closed principle.

  // solve this problem by using factory pattern
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }


  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(
      rho * Math.cos(theta),
      rho * Math.sign(theta)
    );
  }

}

const p = Point.newCartesianPoint(1, 2);
console.log(p);

const p2 = Point.newPolarPoint(5, Math.PI / 2);
console.log(p2);



// factory patter using function
// function Pointer(x, y) {
//   this.x = x;
//   this.y = y;
// }

// // static method using function
// Pointer.newCartesianPoint = function (x, y) {
//   return new this(x, y);
// }

// const p3 = Pointer.newCartesianPoint(1, 2);
// console.log(p3);


/*********
 * Abstract Factory: it is a factory that creates other factories.
 *
 * */