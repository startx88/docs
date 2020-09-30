/**
 * create with watcher function
 */

class Dep {
  constructor() {
    this.storage = [];
  }

  record() {
    if (target && !this.storage.includes(target)) {
      this.storage.push(target)
    }
  }

  notify() {
    this.storage.forEach(run => run())
  }
}

const dep = new Dep()

let price = 10;
let qty = 2;
let total = 0;
let target = null;

// watcher function
function watcher(myFunc) {
  target = myFunc; // assign callback function to the target
  dep.record(); // record target function into the dep class
  target(); // run target first time for record total
  target = null // and target assign null after run it 
}

watcher(() => {
  total = price * qty
})