if (!Object.is) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero;
    var yNegZero;

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero
    } else if (isNan(x) && isNan(y)) {
      return true;
    } else {
      return x === y;
    }

    function isNotNegZero(v) {
      return v == 0 && 1 / v == -Infinity
    }

    function isNan(v) {
      return v !== v;
    }

  }
}