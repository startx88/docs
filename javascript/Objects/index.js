"use strict"

// how do you check negative zero or nan


if (!Object.is || true) {
    Object.is = function Objectsis(x, y) {
        var xNegative = isNegative(x);
        var yNegative = isNegative(y);

        if (xNegative || yNegative) {
            return xNegative && yNegative
        } else if (checkNan(x) && checkNan(y)) {
            return true
        } else {
            return x === y
        }

        function isNegative(x) {
            return x == 0 && (1 / x) == -Infinity
        }

        function checkNan(x) {
            return x !== x
        }
    }
}


function isValidName(name) {
    if (typeof name == "string" && name.trim().length >= 3) {
        return true
    } else {
        return false
    }
}


console.log(isValidName("fk") === true)


function hoursAttended(attended, length) {
    if (typeof attended === "string")
        return false;
}