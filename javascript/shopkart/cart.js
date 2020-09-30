const year = document.getElementById("year");
const section = document.getElementById('products');
const cartTotal = document.getElementById('cartTotal');
const cart_item = document.getElementById('cart_item');

const THESHOP = {}

// reactive object
const reactive = {
  CART: [],
  TOTAL_PRODUCT: 0,
  TOTAL_PRICE: 0,
  PRODUCTS: [
    {
      id: 1,
      title: 'T-shirt',
      description: 'hello world',
      price: 100,
      offerPrice: 80
    },
    {
      id: 2,
      title: 'Pants',
      description: 'hello world',
      price: 150,
      offerPrice: 130
    },
    {
      id: 3,
      title: 'Jeans',
      description: 'hello world',
      price: 500,
      offerPrice: 480
    },
    {
      id: 4,
      title: 'Trousers',
      description: 'hello world',
      price: 900,
      offerPrice: 780
    },
    {
      id: 5,
      title: 'Jackets',
      description: 'hello world',
      price: 1000,
      offerPrice: 800
    },
  ]
}


// product display
year.innerText = new Date().getFullYear();


// const render function
const render = (tag, props, children) => {
  return {
    tag,
    props,
    children
  }
}


// product
// tag creator 
const vDom = (dom, container) => {

}

reactive.PRODUCTS.forEach(product => {
  const card = render('div', { class: 'card col-sm-3' }, render("h1", product.title, card));
  console.log(card)
  // bind to the dom
})

vDom(card, section)



// const createTag = (tag, text, container) => {
//   const el = document.createElement(tag);
//   el.innerText = text;
//   console.log(container)
//   container.appendChild(el);
// }


// // CART TOTAL LENGTH
// const cartTotalLength = (cart) => {
//   const total = cart.reduce((first, last) => first + last.qty, 0)
//   console.log(total, cart)
// }


// // add to cart
// function addToCart(id) {
//   // FIND PRODUCT
//   const product = PRODUCTS.find(product => product.id === id);
//   // EXITING CART
//   const existCart = CART;
//   // IF ITEM EXIST INTO THE CART
//   const productExisted = CART.find(item => item.id === id);
//   if (productExisted) {
//     productExisted.qty++
//   } else {
//     existCart.push({
//       ...product,
//       qty: 1
//     })
//   }
//   cartTotalLength(CART)
// }

// const card = (product) => {
//   const root = document.createElement("div");
//   root.classList.add('card');
//   root.classList.add('col-sm-3')
//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");
//   const price = document.createElement("div");
//   price.innerHTML = `
//      <div class='card-price'>
//        Rs. <del>${product.price}</del>
//        Rs. <ins>${product.offerPrice}</ins>
//      </div>
//   `
//   const btn = document.createElement("button");
//   btn.innerText = "Add to cart"
//   btn.addEventListener("click", () => addToCart(product.id))
//   p.innerText = product.description;
//   h1.innerText = product.title;
//   root.appendChild(h1)
//   root.appendChild(p)
//   root.appendChild(price)
//   root.appendChild(btn)
//   section.appendChild(root)
// }


// PRODUCTS.forEach(card)

