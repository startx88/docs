import faker from 'faker';
let carts = `you have <div>${faker.random.number()}</div> items in your card`;
document.getElementById("app-cart").innerHTML = carts;
