/***********
 * Builder design pattern:
 *
 * The Builder pattern allows a client to construct a complex object by specifying the type and content only.
 * Construction details are hidden from the client entirely.
 *
 * The Builder pattern is a creational pattern.
 * Builder pattern separates the construction of a complex object from its representation.
 * 
 * 
 * 
 * */

// simple builder
const word = 'hello world';
let htmlStr = [];
htmlStr.push('<p>');
htmlStr.push(word);
htmlStr.push('</p>');

console.log(htmlStr.join(''));


const words = ["Hello", "World"];
htmlStr = [];
htmlStr.push('<ul>\n');
for (let i = 0; i < words.length; i++) {
  htmlStr.push('  <li>');
  htmlStr.push(words[i]);
  htmlStr.push('</li>\n');
}
htmlStr.push('</ul>');
console.log(htmlStr.join(''));
