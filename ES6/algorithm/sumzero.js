// write a function called sumZero which accept a sorted array of integers.
// the function should find the first pair where the sum is 0. 
// return an array that includes both the elements in the pair.
// array input: [1,2,3,4,5,6,7,8,9,10,8-2,-3,-5,-6,7,1]
// output: [6,-6]


// complexity is O(n2)
function sumZero(array) {
  if (arr.length == 0) return false;
  arr.sort((a, b) => a - b);
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}


// multiple pointer pattern

function sumZero(arr) {
  if (arr.length == 0) return false;
  arr.sort((a, b) => a - b);

  let first = 0;
  let last = arr.length - 1;
  // [-6,-5,-3,-2,1,1,2,3,4,5,6,7,8,9,10]
  // -6 + 6
  while (first < last) {
    let sum = arr[first] + arr[last];
    if (sum == 0) {
      return [arr[first], arr[last]];
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
}
