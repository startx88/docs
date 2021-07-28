const arr = [1, 2, 3, 4, 5, 6];

// write a function that return the index of a given number;

// function Index(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr.indexOf(num) ?? -1; // O(n2)
//   }
// }


// linear search
// function Index(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) return i;
//   }
//   return -1;
// }


// binary search
function Index(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) return mid;
    if (arr[mid] < num) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}



console.log(Index(arr, 5));