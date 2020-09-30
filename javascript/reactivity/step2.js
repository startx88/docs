/**
 * Create with more verbose code structure, as observable patter work
 */

class Dep {
  constructor() {
    this.subscribers = [] // here our storage subscriber
  }

  record() {
    if (target && !this.subscribers.includes(target)) {
      console.log('target', target)
      this.subscribers.push(target)
    }
  }

  notify() {
    this.subscribers.forEach(run => run())
  }
}

const dep = new Dep();

let price = 10;
let qty = 2;
let total = 0;
let target = null;

target = () => total = price * qty;
dep.record();
target()