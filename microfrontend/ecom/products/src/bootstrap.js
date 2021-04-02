import faker from 'faker'

const mount = (el) => {
  let product = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    product += `<div>${name}</div>`;
  }
  el.innerHTML = product;
}


// only work in dev mode
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('app-product');
  if (el) {
    mount(el);
  }
}


// export mound
export { mount }