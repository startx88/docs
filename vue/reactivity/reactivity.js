/**
 * What reactivity means in programming language:
 *
 */

const data = { price: 10, qty: 2 }; // track this object, if any keys value change 
let totalPrice = 0;
let effect = function () { totalPrice = data.price * data.qty }
let dep = new Set()

track();
effect();

function track() {
  dep.add(effect)
}

function trigger() {
  dep.forEach(effect => effect())
}

data.price = 20
console.log(totalPrice) // => 10
trigger()
console.log(totalPrice) // => 40

