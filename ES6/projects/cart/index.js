// query selector
const alert = document.querySelector("#alert");
const form = document.querySelector("#form");
form.style.display = "none";
alert.style.display = "none";

// shopping project
class Shopping {
  constructor() {
    this.cart = {
      items: [],
      qty: 0
    };
    this.products = [];
  }


  // add product
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(id) {
    this.products = this.products.filter(product => product.id !== id)
  }

  // cart
  addCartItem(product) {
    const isProduct = this.cart.items.find(item => item.id === product.id);
    if (isProduct) {
      this.cart.items.map(product => product.id === product.id ? { ...product, qty: product.qty + 1 } : product)
    } else {
      this.cart.items.push({
        ...product,
        qty: 1
      })
    }
  }
  removeCartItem(id) {
    const isProduct = this.cart.items.find(item => item.id === id);
    if (isProduct.qty > 1) {
      isProduct.qty--;
    } else {
      this.cart.items = this.cart.items.filter(item => item.id !== id)
    }
  }

}

// states
const state = {
  cart: null,
  products: [],
  errors: [],
  selectedFile: null
}


// product constructor object
function Product(id, title, description, price, image) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.price = price;
  this.image = image;
}

// select image
function selectImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    Object.defineProperty(file, "url", {
      value: reader.result,
      enumerable: true,
      configurable: true
    })
  }
  reader.readAsDataURL(file);
  state.selectedFile = file;
}








function removeProduct(id) {
  state.products = state.products.filter(product => product.id !== id);
}


// add product
function addProduct(e) {
  e.preventDefault();
  const { title, description, price } = e.target;
  const id = Math.random().toString()
  const product = new Product(id, title.value, description.value, price.value, state.selectedFile);
  state.products.push(product);
  state.selectedFile = null;
  init();
}

// validation
function validation() {
  if (title.value === "") {
    if (state.errors.includes("Title is requrid")) return;
    state.errors.push("Title is requrid");
    showError()
    return;
  }
  if (price.value === "") {
    if (state.errors.includes("Price is requrid")) return;
    state.errors.push("Price is requrid");
    showError()
    return;
  }
}


function showError() {
  alert.innerHTML = state.errors.map(error => `<p>${error}</p>`);
  alert.style.display = "block";
}


// toggle product
function toggleProduct(e) {
  if (form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}


// display

function init() {
  if (state.products.length === 0) return;
  const ul = document.createElement("ul");
  ul.classList.add('row')
  ul.classList.add('list-group')
  for (let item of state.products) {
    ul.append(displayItem(item));
  }
  root.appendChild(ul)
}

function displayItem(item) {
  const li = document.createElement("li");
  li.classList.add('col-md-3')
  li.innerHTML = `
      <div class='card'>
        <div class='card-img-top'>
          <img src='${item.image.url}' class='img-responsive'/>
        </div
         <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <span>$${item.price}</span>
            <p class="card-text">${item.description}</p>
      </div>
      </div>
  `;
  return li;
}


init()