const product = { price: 10, qty: 2 };
let total = 0;

// const deps = new Set()
const effect = () => total = product.price * product.qty;
// const track = () => deps.add(effect);
// const trigger = () => deps.forEach(effect => effect());

// track();
// effect();
// console.log(total)

const depsMap = new WeakMap()
const track = (key) => {
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }

    dep.add(effect)
}

const trigger = (key) => {
    let dep = depsMap.get(key);
    if (dep) {
        dep.forEach(effect => effect())
    }
}

track('price');
effect()