const cart = { price: 10, qty: 1 };
let total = 0;
let target = null;

// proxy object
const proxy = (target, handler) => {
  return new Proxy(target, handler)
};

// proxy object
const dep = new Set();
const data = proxy(cart, {
  get(target, prop) {
    if (!(prop in target)) throw new TypeError(`${props} does not exist in ${target}`)
    dep.add(watcher)
    return Reflect.get(...arguments)
  },
  set(target, prop, value) {
    if (!(prop in target)) throw new Error(`${props} does not exist in ${target}`)
    target[prop] = value;
    for (let el of dep) {
      if (typeof el === "function") {
        el()
      }
    }
    return target[prop]
  }
})

// watcher
function print(myFunc) {
  watcher = myFunc;
  watcher();
  watcher = null;
}


print(() => {
  total = data.price * data.qty
})


print(() => {
  const price = document.querySelector('#price')
  price.innerHTML = data.price
  const qty = document.querySelector('#qty')
  qty.innerHTML = data.qty
  const totals = document.querySelector('#total')
  console.log(total)
  totals.innerHTML = total
})
console.log(data)