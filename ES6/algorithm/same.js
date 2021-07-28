const str = 'anagram';


// frequency counter pattern
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;


  // O(n2) - quadratic time

  // solution 1:
  for (var i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index == -1) return false;
    arr2.splice(index, 1);
  }
  return true;

  // solution 2:
  return arr1.reduce(function (prev, curr) {
    console.log(curr * curr);
    if (arr2.indexOf(curr * curr) == -1) return false;
    return true;
  }, [])

  // solution 3:
  return arr2.some((item) => arr1.indexOf(Math.sqrt(item)) !== -1); // O(n2)

  // O(n) - linear time

  // solution 1:
  let object1 = {};
  let object2 = {};

  for (var i = 0; i < arr1.length; i++) {
    object1[arr1[i]] = (object1[arr1[i]] || 0) + 1;
    object1[arr2[i]] = (object1[arr2[i]] || 0) + 1;
  }

  for (let key in object1) {
    if (!(key ** 2 in object2)) return false;
    if (!(object2[key ** 2] !== object1[key])) return false;
  }

  return true;


}


console.log(same([2, 4, 6, 2], [36, 16, 4, 4]));