/**
 * Javscript array:
 * 
 * Array is subtype of js object:
 * 
 *  Array prototype methods:
 *   
 * 1.  at: ƒ at()
 * 2.  concat: ƒ concat()
 * 3.  constructor: ƒ Array()
 * 4.  copyWithin: ƒ copyWithin()
 * 5.  entries: ƒ entries()
 * 6.  every: ƒ every()
 * 7.  fill: ƒ fill()
 * 8.  filter: ƒ filter()
 * 9.  find: ƒ find()
 * 10. findIndex: ƒ findIndex()
 * 11. findLast: ƒ findLast()
 * 12. findLastIndex: ƒ findLastIndex()
 * 13. flat: ƒ flat()
 * 14. flatMap: ƒ flatMap()
 * 15. forEach: ƒ forEach()
 * 16. includes: ƒ includes()
 * 18. indexOf: ƒ indexOf()
 * 19. join: ƒ join()
 * 20. keys: ƒ keys()
 * 21. lastIndexOf: ƒ lastIndexOf()
 * 22. length: 0
 * 23. map: ƒ map()
 * 24. pop: ƒ pop()
 * 25. push: ƒ push()
 * 26. reduce: ƒ reduce()
 * 27. reduceRight: ƒ reduceRight()
 * 28. reverse: ƒ reverse()
 * 29. shift: ƒ shift()
 * 30. slice: ƒ slice()
 * 31. some: ƒ some()
 * 32. sort: ƒ sort()
 * 33. splice: ƒ splice()
 * 34. toLocaleString: ƒ toLocaleString()
 * 35. toString: ƒ toString()
 * 36. unshift: ƒ unshift()
 * 37. values: ƒ values()
 * 
 *  */

/**
 * Array.from: create a new array instance from an array-like objects:
 * 
 */

/**
 * Array.flat() => method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth;
 * 
 */
const arr1 = [0, 1, 2, [3, 4], [[6, [7]]]];
//const result = arr1.flat(); // return [0,1,2,3,4]

// create your own flat function
function myFlat(inpArr) {
  const result = [];
  function inner(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].constructor.name === 'Array') {
        inner(arr[i])
      } else {
        result.push(arr[i])
      }
    }
    return result;
  }
  return inner(inpArr)
}

console.log(myFlat(arr1))