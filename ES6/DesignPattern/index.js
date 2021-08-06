class Singleton {
  constructor() {
    let instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
}


const s1 = new Singleton();

const s2 = new Singleton();

console.log(s1 === s2); // true



function Single() {
  let instance = this.constructor.instance;
  if (instance) {
    return instance;
  }
  this.constructor.instance = this;
}

const s3 = new Single();
const s4 = new Single();

console.log(s3 === s4); // true"