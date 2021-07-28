/***********
 * Open/Closed Principle:
 * Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
 *
 * */

let Color = Object.freeze({ red: "red", green: "green", blue: "blue" });
let Sizes = Object.freeze({ small: 'small', medium: 'medium', large: 'large', extraLarge: 'extra large' });

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  filterByColor(products, color) {
    return products.filter(product => product.color === color);
  }

  filterBySize(products, size) {
    return products.filter(product => product.size === size);
  }
}


const shirt = new Product("Rebook Shirt", Color.green, Sizes.small);
const tshirt = new Product("Rebook T-Shirt", Color.green, Sizes.medium);
const pants = new Product("Rebook Pants", Color.red, Sizes.large);

const products = [shirt, tshirt, pants];


const filter = new ProductFilter();

filter.filterByColor(products, Color.green)
  .forEach(product => console.log(product.name));

