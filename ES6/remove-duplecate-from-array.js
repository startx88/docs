/**
 * There are many ways to remove duplecate from arrays:
 * 1. Using for loop
 */

const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 3, 7, 8, 9, 2, 99, 88, 77, 7, 5, 4];

// remove duplecate from array using for lop
function removeDuplicateByLooping(arg) {
  const byLoop = [];
  for (let index = 0; index < arg.length; index++) {
    if (arg.indexOf(arg[index]) === index) {
      byLoop.push(arg[index])
    }
  }
  return byLoop;
}

console.log(removeDuplicateByLooping(arr));

// remove duplicate using filter
function removeDuplicateByFilter(arg) {
  return arg.filter((item, pos) => arg.indexOf(item) === pos)
}
console.log('remove by filter', removeDuplicateByFilter(arr));

// By Using a Set
function removeDuplicateBySet(arg) {
  return [...new Set(arg)]
}
console.log('remove by filter', removeDuplicateBySet(arr));

// remove by forEach
function removByForEach(arg) {
  let array = [];
  arg.forEach(el => {
    if (!array.includes(el)) {
      array.push(el)
    }
  })
  return array
}

console.log('remove by removByForEach', removByForEach(arr));
