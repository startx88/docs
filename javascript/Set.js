/**
 * What are Sets in js:
 * Sets are a new type of object with in ES-6 or 2015, these are used to create a collection of unique values.
 *
 * Syntax:
 * const set = new Set()
 *
 * Properties:
 * Set.prototype.size: give the size of set.
 *
 * Methods:
 * 1. Set.prototype.add: Add value to the set.
 * 2. Set.prototype.has: Check the value exist or not return true or false.
 * 3. Set.prototype.get: Get the selected vale.
 * 4. Set.prototype.delete: delete the selected value
 * 5. Set.prototype.clear: clear the set
 * 6. Set.prototype.keys: return the iterator of kesy
 * 7. Set.prototype.values: return the iterator of values
 * 8. Set.prototype.entries: return the array of values.
 * 9. Set.prototype.forEach: iterate the value
 * 
 * 
 * Note:
 * 1. Each value in the set has to be unique so, the value equality checked.
 * 2. NaN or undefined can also be stored in a Set.
 */

const set = new Set();
console.log('SET', set);
console.log('PROTOTYPE OF SET', Object.getPrototypeOf(set));

// add value into set
const one = 1;
const name = "Pradeep";
const obj = { price: 10, qty: 2 };
const arr = [1, 3, 4, 2, 5, 5, 6, 7, 3];
const fun = () => { console.log('Hello World') }
set.add(one);
set.add(name);
set.add(obj);
set.add(arr);
set.add(fun);
set.add(one);


console.log("====== start for each ============")
set.forEach(item => console.log(item))
console.log("====== end for each ============");

console.log('SIZE OF SET:', set.size);

console.log("====== Keys and values iterator ============")
const e = set.values();
const k = set.keys();
const v = set.values();
for (let el of k) {
  console.log(el)
}
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next().done)


// remove duplecate
const dupArr = [1, 2, 3, 4, 5, 6, 7, 4, 3, , 23, 4, 1, 5, 4,];
console.log('REMOVE DUPLECATE USING SET', Array.from(new Set(dupArr)));

