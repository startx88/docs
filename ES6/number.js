/**
 * Javascript has only one type of number.
 * That can be written with or without decimal.
 *
 * Javascript numbers are 64 bit format IEEE-754 floating point numbers. also known as “double precision floating point numbers”
 * value: 0-51 , 52 bit,
 * exponent:52-62, 11 bit,
 * sign: 63 , 1 bit
 *
 * Number instance method in ES5,
 * 1. toString(radix?: number) => Return a string representation of an object
 * 2. toFixed(fractionDigits?: number); => Returns a string representing a number in fixed-point notation, it is best for money calculations
 * 3. toPrecision(precision?: number); => Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 * 4. toExponent(fractionDigits?: number);=> Returns a string containing a number represented in exponential notation
 * 5. valueOf();=> Returns the primitive value of the specified object.
 * 6. toLocalString() : added into ES6
 *
 * NumberConstructor static method and properties in ES5
 * 1. MAX_VALUE (Readonly),
 * 2. MIN_VALUE (Readonly)
 * 3. POSITIVE_INFINITY (Readonly)
 * 4. NEGATIVE_INFINITY (Readonly)
 * 5. prototype (Readonly)
 * 6. NaN (Readonly)
 * added properties in ES6
 * 7. isFinite(number: unknown): boolean;
 * 8. isInteger(number: unknown): boolean;
 * 9. isSafeInteger(number: unknown): boolean;
 * 10.isNaN(number: unknown): boolean - return true/false if number is nan
 * 10.parseInt(number, redix:2 to 36) : return only one number space are allowed (if number is not valid number then return NaN)
 * 11 parseFloat(decimal) : return decimal
 * 12.MAX_SAFE_INTEGER (readonly)
 * 13.MIN_SAFE_INTEGER (readonly)
 */

/**
 * Hex, binary and octal numbers:
 * Hexadecimal numbers are widly used in javascript to representing colors, encoded character and many other things.
 * 
 * Hexa: If number start with "0x" it represent as hexadecimal.
 * 
 * Binary: Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B).
 *         If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown: "Missing binary digits after 0b"
 *      ex: var b = 0b1001
 */

/**
 * To applied number method directly on number use two dots ..
 * ex: 1234..toString() => it works fine
 * note: single dot represet as a decimal point after value.
 *
 */


/**
 * NaN , isNaN and Number.isNaN
 * ---------------------------------------------------
 * 
 * Note: Global isNaN: this don't work properly: why see it
 * Tip: NaN is the only value that is not equal to itself.
 * 
 * ex:1
 *  var myAge = 10 * 'age' => NaN
 *  isNaN(myAge) => true
 *  
 * ex:2
 *  isNaN('My age') => true, OOP's why it is true,
 *  note: isNaN first convert into Number than evalute. that's why it is true. 
 * 
 * ex:3
 *  Number.isNaN('my age') => false, my age is string not NaN, alway use Number.isNaN for getting NaN value.
 */


/**
 * Negative zero
 * -----------------------------------
 * 1. 0 == -0 => true,  OOP's
 * 2. 0 === -0 => true, OOP's, === also lies to us.
 * 3. -0.toString() => 0, OOP's, where is my negative sign.
 * 4. -0 < 0 => false, OOP's 
 * 5. -0 > 0 => false
 * 
 * How to check valid equality: you can use Object.is(value, newValue)
 * ex:
 *  Object.is(-0,0) => false
 *  Object.is(-0,-0) => true
 */

/**
 * Fix Math.sign();
 * Why Need to fix, see below examples:
 * 1. Math.sign(-3) => -1,
 * 2. Math.sign(3)=> 1
 * 3. Math.sing(-0)=> -0, OOP's why
 * 4. Math.sign(0)=> 0, OOP's why
 * 
 * 
 * Fix this by wrting your own function
 * 
 * function Sign(value){
 *  return value!==0?Math.sign(value):Object.is(value,-0)?-1:1
 * }
 * 
 * it always return 1, -1 for positive or negative.
 *  
 */

/**
 * Object.is pollyfill: it is determine that two values are the same value.
 * 
 * if(!Object.is){
 *   Object.is = function(v1,v2){
 *    var xNegZero = isItNegZero(v1);
 *    var yNegZero = isItNegZero(v2);
 * 
 *    if(xNegZero || yNegZero){
 *      return xNegZero && yNegZero;
 *    }
 *    else if(isItNaN(v1) && isItNaN(v2)){
 *      return true;
 *    }
 *    else{
 *      return v1===v2;
 *    }
 *   
 * 
 *    function isItNegZero(v){
 *      return v==0 && (1/v) == -Infinity;
 *    }
 * 
 *    function isItNaN(v){
 *      return v!==v  
 *    }
 * 
 * }
 * 
 *  or
 * 
 *  Object.defineProperty('Object','is',{
 *    value:function(v1,v2){
 * 
 *    }
 *  })
 * }
 */

/*********
 * Examples
 *
 * Q1. Write a JavaScript function to convert a number from one base to another.
 *
 * Q2. Write a JavaScript function to convert a binary number to a decimal number.
 *
 * Q3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
 * 
 * Q4. Write a JavaScript function to generate a random integer.
 * 
 * Q5. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
 * 
 * Q6. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
 * 
 * Q7. Write a JavaScript function to get the least common multiple (LCM) of two numbers.
 * 
 * Q8. Write a JavaScript function to find out if a number is a natural number or not.
 */

// Solution1:
function convertBaseToAnother(value, fromBase, toBase) {
  if ((fromBase && toBase) < 2 || (fromBase && toBase) > 36) return "Base between 2 and 36";
  return parseInt(value, fromBase).toString(toBase);
}

// Solution2:
function binaryToDecimal(value) {
  return parseInt(value, 2).toString(10)
}

// Solution3: 
function decimalToBHO(value) {
  const B = value.toString(2);
  const H = value.toString(16);
  const O = value.toString(8);
  console.log(value + ' to binary =' + B, value + ' to Hexa =' + H, value + ' to Octal =' + O)
}

// Solution4:
function generateRandomNumber(min, max) {
  if (min === null || max === null) return;

  if (max == null) {
    max = min;
    min = 0
  }

  return min + Math.floor(Math.random() * (max - min + 1));
}

// Solution5:
function gcd(a, b) {
  if ((typeof a != "number") || (typeof b != "number")) return;
  a = Math.abs(a);
  b = Math.abs(b)

  while (b) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}


// Solution6:
function gcdMoreThan2Num(value) {
  if (!Array.isArray(value)) return;

  var a = value[0];

  for (let i = 0; i < value.length; i++) {
    b = value[i];
    a = gcd(a, b)
  }
  return a;
}


// Solution7:
function lcm(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
}

// Solution8:
