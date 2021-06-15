/********
 * Parsing: Break into two pieses.
 * 1. Lexical analysis : Take the big sring of code and turn it into tokens.
 * 2. Syntactic analysis.
 *
 */

const { isWhitespace, isLetter, isNumber, isParenthesis, isQuote } = require('../utility');


// tokenize function
function tokenize(input) {
  let cursor = 0;
  let tokens = [];

  while (cursor < input.length) {
    const character = input[cursor]

    if (isParenthesis(character)) {
      tokens.push({
        type: 'Prenthesis',
        value: character
      });

      cursor++;
      continue;;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;;
    }

    if (isNumber(character)) {
      tokens.push({
        type: 'Number',
        value: character
      });

      cursor++;
      continue;;
    }

  }
  return tokens
}

// export
module.exports = { tokenize }