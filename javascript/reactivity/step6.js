const cart = { price: 10, qty: 2 };
let total = 0;
let target = null;


Object.keys(cart).forEach(key => {
  const set = new Set(); // collection of unique values
  console.log(set)
  let value = cart[key];
  Object.defineProperty(cart, key, {
    get() {
      if (!set.has(target)) set.add(target) // add target if not it has
      return value;
    }, set(val) {
      value = val;
      for (let item of set) {
        if (typeof item === "function") {
          item()
        }
      }
    }
  })
})


function watcher(myFun) {
  target = myFun;
  target();
  target = null
}

watcher(() => {
  total = cart.price * cart.qty
})

function html() {
  const price = document.querySelector('#price')
  price.innerHTML = cart.price
  const qty = document.querySelector('#qty')
  qty.innerHTML = cart.qty
  const totals = document.querySelector('#total')
  console.log(total)
  totals.innerHTML = total
}

watcher(html)