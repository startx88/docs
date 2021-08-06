
// const storage = [];
// target = () => total = price * qty; // this is not changing
// function record() { storage.push(target) }
// function replay() { storage.forEach(run => run()) }

// record()
// replay()

// now use more scalable code using observer pattern
class Dep {
  constructor() {
    this.subscribers = [] // hrer are storeage
  }

  depend() {
    if (target && !this.subscribers.includes(target)) { // if target is not exist in the subscriber
      this.subscribers.push(target) // then add it to the subscriber
    }
  }

  notify() {
    this.subscribers.forEach(run => run()) // it run all stored code inside subscriber
  }
}

//const dep = new Dep();
// const cart = { price: 10, qty: 2 };

// Object.keys(cart).forEach(key=>{
//   Object.defineProperty(cart, key,{

//   })
// })


// let price = 10;
// let qty = 2;
// let total = 0;
// let target = null;

// instead of writing this we write a watcher function
// target = () => total = price * qty
// target()




function watcher(trigger) {
  target = trigger; // assign the function to the target and 
  dep.depend()
  target();
  target = null
}

watcher(() => {
  total = price * qty
})

