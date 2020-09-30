const cart = { price: 10, qty: 1 };
let total = 0;
let target = null;

// proxy object
const proxy = (target, handler) => {
  return new Proxy(target, handler)
};

// depends
const observe = function (data) {
  const depends = {}
  return proxy(data, {
    get(_, key) {
      //if (!(key in object)) throw new Error(`${key} does not exist in ${object}`)
      if (target) {
        if (!depends[key]) depends[key] = [];
        depends[key].push(target)
      }
      return Reflect.get(...arguments)
    },
    set(object, key, value) {
      object[key] = value
      if (depends[key]) {
        depends[key].forEach(run => run())
      }
    }
  });
}

const data = observe(cart)

// watcher
function render(myFunc) {
  target = myFunc;
  target();
  target = null;
}


render(() => {
  total = data.price * data.qty
})


render(() => {
  document.getElementById("app").innerHTML = `
   <table>
   <tr>
     <th>Price</th>
     <td>${data.price}</td>
     <td>
       <button @click="incrementPrice">+</increment>
       <button @click="decremntPrice">-</increment>
     </td>
   </tr>
   <tr>
     <th>qty</th>
     <td id="qty">${data.qty}</td>
     <td>
     <button @click="incrementQty">+</increment>
     <button @click="decremntQty">-</increment>
   </td>
   </tr>
   <tr>
     <th>Total</th>
     <td id="total" colspan="2">${total}</td>
   </tr>
 </table>
   `
});

const methods = {
  incrementPrice() {
    data.price++
  },
  decremntPrice() {
    data.price--
  },
  incrementQty() {
    data.qty++
  },
  decremntQty() {
    data.qty--
  }
}


document.getElementById("app").addEventListener("click", event => {
  const clickAttr = event.target.attributes["@click"];
  const methodName = clickAttr && clickAttr.value;
  const method = methods[methodName];
  if (method) {
    method()
  }

})

