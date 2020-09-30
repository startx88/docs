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


const cart = { price: 10, qty: 2 }
let total = 0;
let target = null;

Object.keys(cart).forEach(key => {
  const dep = new Dep();
  let value = cart[key];
  Object.defineProperty(cart, key, {
    get() {
      console.log(`${key}: I was accessed`)
      dep.record();
      return value
    }, set(val) {
      console.log(`${key}: I was changd`)
      value = val;
      dep.notify()
    }
  })
});

// watcher function
function watcher(myFunc) {
  target = myFunc;
  target();
  target = null
}


watcher(() => {
  total = cart.price * cart.qty
})