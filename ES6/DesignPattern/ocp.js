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

/* class ProductFilter {
  filterByColor(products, color) {
    return products.filter(product => product.color === color);
  }

  filterBySize(products, size) {
    return products.filter(product => product.size === size);
  }
} */


const shirt = new Product("Rebook Shirt", Color.green, Sizes.small);
const tshirt = new Product("Rebook T-Shirt", Color.green, Sizes.medium);
const pants = new Product("Rebook Pants", Color.red, Sizes.large);

const products = [shirt, tshirt, pants];


/* const filter = new ProductFilter();

filter.filterByColor(products, Color.green)
  .forEach(product => console.log(product.name)); */


// this example breaks the open-closed principle
// we are modifying the ProductFileter class for adding more filters.
// Resolve this pattern using specification


class ColorSpecification {
  constructor(color) { this.color = color; }

  isSatisfied(item) { return item.color === this.color; }
}

class SizeSpecification {
  constructor(size) { this.size = size; }

  isSatisfied(item) { return item.size === this.size; }
}


class AndSpecification {
  constructor(spec) { this.spec = spec; }

  isSatisfied(item) {
    return this.spec.every(x => x.isSatisfied(item));
  }
}


const and = new AndSpecification([new ColorSpecification(Color.green), new SizeSpecification(Sizes.small)]);


class ProductFilter {
  filter(items, spec) {
    return items.filter(item => spec.isSatisfied(item))
  }
}

let pf = new ProductFilter();

for (let item of pf.filter(products, and)) {
  console.log(` item name ${item.name} and color is ${item.color} and size is ${item.size}`);
}

for (let item of pf.filter(products, new SizeSpecification(Sizes.small))) {
  console.log(` item name ${item.name} and size is ${item.size}`);
}


// javascript doesn't support abstract specification
// how to declare abstract class
/*
  class Specification{
    constructor(){
      if(this.constructor.name === 'Specification') throw new Error('Specifaction can not initialize');
    }
    isSatisfied(item){} // abstract method
  }
*/