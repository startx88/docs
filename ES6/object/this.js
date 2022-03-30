/**
 * 1. One of the most confused mechanisms in JavaScript is the this keyword.
 * 2. It’s a special identifier keyword that’s automatically defined in the scope of every function.
 * 
 */

function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
var me = { name: "Kyle" };
var you = { name: "Reader" };

identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER

// # This code snippet allows the identify() and speak() functions to be reused against multiple context objects(me and you),
// # nstead of relying on this, you could have explicitly passed in a contextobject to both identify() and speak():

function identify(context) {
  return context.name.toUpperCase();
}
function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}
identify(you); // READER
speak(me); // Hello, I'm KYLE
