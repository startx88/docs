// multiple pointer


function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;
  let len = arr.length - num + 1;
  let max = -Infinity;
  for (let i = 0; i < len; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]; // 1+0=2, 1+1=14,1+2=50,
    }

    if (temp > max) max = temp;
  }

  return max;
}



function maxSum(arr, num) {
  let len = arr.length;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  sum = max;
  for (let j = num; j < len; j++) {
    sum = sum - arr[j - num] + arr[j];
    max = Math.max(sum, max)
  }
  return max;
}

const arr = [1, 2, 14, 50, 5, 23, 45] // 78= 

console.log(maxSum(arr, 3));