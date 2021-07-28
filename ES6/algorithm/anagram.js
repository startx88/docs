// frequency counter pattern



const text1 = "texttwisttime";
const text2 = "timetwisttext";

function anagram(text1, text2) {

  if (typeof text1 !== "string" || typeof text2 !== "string") throw new Error("Only string type allowed");
  if (text1.length !== text2.length) {
    return false;
  };

  const frequency_counter = {};
  const frequency_counter2 = {}

  for (let char of text1) {
    frequency_counter[char] = (frequency_counter[char] || 0) + 1;
  }

  for (let char of text2) {
    frequency_counter2[char] = (frequency_counter2[char] || 0) + 1;
  }

  console.log(frequency_counter, frequency_counter2);

  for (let item in frequency_counter) {
    if (!(item in frequency_counter2)) return false;
    if (frequency_counter2[item] !== frequency_counter[item]) return false;
  }

  return true;
}


console.log(anagram(text1, text2))


// solution 2 
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  // add string length comparison check
  if (str1.length !== str2.length) {
    return false
  }

  // define two frequency counters
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  // set both frequency counters
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = ++frequencyCounter1[str1[i]] || 1;
    frequencyCounter2[str2[i]] = ++frequencyCounter2[str2[i]] || 1;
  }

  // match frequency for all characters
  for (let char of str1) {
    if (frequencyCounter1[char] !== frequencyCounter2[char]) {
      return false;
    }
  }


  return true;
}