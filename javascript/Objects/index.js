"use strict"

/**
 * Object.is pollyfill
 */

if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegZero;
        var yNegZero;
    }
}



function isNegative(v) {
    return v == 0 && (1 / v) == -Infinity
}

console.log('f', -0 === 0)