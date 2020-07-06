/**
 * https://tc39.es/ecma262/#sec-ecmascript-language-types
* JavaScript is a loosely typed and dynamic language.
* Javascript data types:
* Javascript has 9 data types, divided into two categories
* 1. Primitive data types
* 2. Reference data types
*
*
* 1. Primitive types
*     a. Number
*     b. String
*     c. Boolean
*     d. Undefined
*     e. Symbol
*     f. BigInt
*
* 2. Reference types
*     a. Object
*     b. Array  ( it is a special type of object )
*     c. Function
*     d. Null
*
*
* typeof operattor guarantees to display the string of types
    ex: const x =90;
        console.log(typeof x) => "number"
        const name = "pradeep"
        console.lolg(typeof name) => "string"
        const show=()=>{return this.name};
        console.log(typeof show) => "function"
        const y;
        console.log(typeof y) => "undefined"


*
* Javascript coersion: implicit and explicit coersion,
* conversion is equal to the coercion, difference is that coersion works implicitly, conversion work implicit or explicit
*
* Abstract operation: it is a process to convert one type to another type.
*
* ToPrimitive abstract operation: it convert non-primitive type to primitive type
* 1. ToNumber() operation
* 2. ToString() operation
*
* toString coersion: if string is present the it user toString(), if not then it user valueOf()
*   a.  const x=5;
*        console.log(x.toString()) => "5"
*    b. const x = null;
*        console.log(x.toString()) => "null"
*    c. const x = undefined;
*        console.log(x.toString()) => "undefined"
*    d. const x = 0;
*        console.log(x.toString()) => "0"
*    e. const x=-0;
*        console.log(x.toString()) => "0" // OOPs
*    f. const x={}
*        console.log(x.toString()) => "[object Object]"
*    g. const x=[]
*        console.log(x.toString()) => ""
*    h. const x=[null, undefined]
*        console.log(x.toString()) => ","
*    i. const x=[null]
*        console.log(x.toString()) => ""
*    j. const x=[undefined]
*        console.log(x.toString()) => ""
*    k. const x=[[[{}]]]
*        console.log(x.toString()) => "[object Object]"
*
*
* toNumber abstract operation:
*    a. const x="";
*        console.log(Number(x)) => 0
*    b. const x=null;
*        console.log(Number(x)) => 0
*    c. const x = undefined;
*        console.log(Number(x)) => NaN
*    d. const x = []
*        console.log(Number(x)) => 0
*    e. const x="-0"
*        console.log(Number(x)) => -0
*    f. const x = "0"
*        console.log(Number(x)) => 0
*    g. const x = false
*        console.log(Number(x)) => 0
*    h. const x = true
*        console.log(Number(x)) => 1
*    i. const x={};
*        console.log(Number(x)) => NaN
*
* - Argument Type	Result
*      Undefined	Return NaN.
*      Null	       Return +0.
*      Boolean	If argument is true, return 1. If argument is false, return +0.
*      Number	       Return argument (no conversion).
*      String	       See grammar and conversion algorithm below.
*      Symbol	       Throw a TypeError exception.
*      BigInt	       Throw a TypeError exception.
*      Object        Apply the following steps:
*                    Let primValue be ? ToPrimitive(argument, hint Number).
*                    Return ? ToNumber(primValue).
*
*
* Boolean: if value is not in falsy list then its true
* Falsy = null, undefined, NaN, 0,-0, false, ""
*
*
* What is boxing in javascript:
*  primitive value has no property and methods. so javascript implicity convert your primitive value into object to user property and methods
*  that is called boxing.
*  ex: const x="Hello world";
*  console.log(x.length) => 11
*
*
* Equality comparisons:
* there are 4 equality comparision algorithm in ES2015.
*   a. Abstract equality comparision: compare by value
       ex: ==
*   b. Strict equality comparision: compare by value and types
       ex: ===
*   c. SaveValueZero : compare by %TypedArray%, ArrayBuffer constructor, Map, Set operations and String.prototype.includes
*   d. SaveValue: used in all other places
*
*  JavaScript provides three different value-comparison operations:
*   a. === Strict equality comparision ("Strict equality", "identity", "triple equals")
*   b. == Abstract equality comparision ("loose equality", "double equal")
*   c. Object.is: provide same value es2015
*

*/