const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

// helper functions
const isWhitespace = (input) => WHITESPACE.test(input)

const isLetter = (input) => LETTER.test(input)

const isNumber = (input) => NUMBER.test(input)

const isOpenPrenthesis = (input) => input === '(';

const isClosePrenthesis = (input) => input === ')';

const isParenthesis = (input) => isOpenPrenthesis(input) || isClosePrenthesis(input);

const isQuote = (input) => input === '"';

const isOperator = (input) => OPERATORS.includes(input)

// export
module.exports = { isWhitespace, isLetter, isNumber, isParenthesis, isQuote, isOperator, isOpenPrenthesis, isClosePrenthesis }
