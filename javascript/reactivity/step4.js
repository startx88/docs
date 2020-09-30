class Dep {
  constructor() {
    this.store = [];
  }

  record() {
    if (target && !this.store.includes(target)) {
      this.store.push(target)
    }
  }

  notify() {
    this.store.forEach(run => run())
  }
}

const dep = new Dep()
const cart = { price: 10, qty: 2 };
let total = 0;
let target = null

let inital = cart.price;

Object.defineProperty(cart, "price", {
  get() {
    console.log("I was accessed!")
    dep.record()
    return inital;
  },
  set(val) {
    console.log("I was changed")
    inital = val
    dep.notify()
  }
})


function watcher(myFun) {
  target = myFun;
  target();
  target = null
}

watcher(() => {
  total = cart.price * cart.qty
})

