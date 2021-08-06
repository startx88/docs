// singleton defined in ES6\DesignPattern\singleton\state.js
class State {
  constructor() {
    this.state = {};
    let instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = instance;
  }

  add({ key, value }) {
    this.state[key] = value;
  }
}


class ProductManager {
  constructor() {
    this.products = [];
  }
  add(product) {

    this.products.push(product);
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}


const st = new State();
const pm = new ProductManager;
pm.add(new Product(Math.random().toString(), 'Shirt', 200));
pm.add(new Product(Math.random().toString(), 'Pants', 300));

st.add({ key: "products", value: pm.products });

class Cart {
  constructor() {
    this.carts = {
      items: [],
      total: 0
    };
  }
  addToCart(product) {
    let items = this.carts?.items;
    let pexist = this.carts?.items.find(p => p.id === product.id);
    let index = this.carts?.items.findIndex(p => p.id === product.id);
    let update = items[index];
    if (pexist) {
      update.qty += 1;
      items[index] = update;
    } else {
      update = { ...product, qty: 1 };
      items.push(update);
    }
    this.carts.items = items;
    this.carts.total = items.reduce((total, item) => total + item.qty * item.price, 0);
  }
}

const c = new Cart();
c.addToCart(pm.products[0]);
c.addToCart(pm.products[0]);
c.addToCart(pm.products[1]);

st.add({
  key: "carts", value: {
    ...c.carts,
    items: JSON.stringify(c.carts.items),
  }
});

console.log(st.state);