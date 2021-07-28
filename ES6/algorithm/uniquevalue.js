// write a function and pass array as input and return count as output of unique elements;
function unique(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result.length;
}

console.log(unique([-6, -6, -5, 12, -5, -3, -2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));