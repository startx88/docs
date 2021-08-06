/*******
 * Adapter design pattern:
 * You can create an adapter. This is a special object that converts the interface of one object so that another object can understand it.
 *
 * */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return `${this.start.toString()}→${this.end.toString()}`;
  }
}

class VectorObject extends Array { }

class VectorRectangle extends VectorObject {
  constructor(x, y, width, height) {
    super();
    this.push(new Line(new Point(x, y), new Point(x + width, y)));
    this.push(new Line(new Point(x + width, y), new Point(x + width, y + height)));
    this.push(new Line(new Point(x, y), new Point(x, y + height)));
    this.push(new Line(new Point(x, y + height), new Point(x + width, y + height))); this.push
  }
}

// ↑↑↑ this is your API ↑↑↑

// ↓↓↓ this is what you have to work with ↓↓↓
String.prototype.hashCode = function () {
  if (Array.prototype.reduce) {
    return this.split("").reduce(function (a, b) {
      a = ((a << 5) - a) + b.charCodeAt(0); return a & a
    }, 0);
  }
  let hash = 0;
  if (this.length === 0) return hash;
  for (let i = 0; i < this.length; i++) {
    const character = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
};

class LineToPointAdapter extends Array {
  constructor(line) {
    super();

    this.hash = JSON.stringify(line).hashCode();
    if (LineToPointAdapter.cache[this.hash])
      return; // we already have it

    console.log(`${LineToPointAdapter.count++}: Generating ` +
      `points for line ${line.toString()} (with caching)`);

    let points = [];

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0) {
      for (let y = top; y <= bottom; ++y) {
        points.push(new Point(left, y));
      }
    }
    else if (line.end.y - line.start.y === 0) {
      for (let x = left; x <= right; ++x) {
        points.push(new Point(x, top));
      }
    }

    LineToPointAdapter.cache[this.hash] = points;
  }

  get items() {
    return LineToPointAdapter.cache[this.hash];
  }
}
LineToPointAdapter.count = 0;
LineToPointAdapter.cache = {};

let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6)
];

let drawPoint = function (point) {
  process.stdout.write('.');
};

let draw = function () {
  for (let vo of vectorObjects) {
    for (let line of vo) {
      let adapter = new LineToPointAdapter(line);
      adapter.items.forEach(drawPoint);
    }
  }
};

draw();
draw();


// another example
class Square {
  constructor(side) {
    this.side = side;
  }
}

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }

  get width() {
    return this.square.side;
  }

  get height() {
    return this.square.side;
  }
}

describe('adapter', function () {
  it('should adapt things, duh!', function () {
    let sq = new Square(11);
    let adapter = new SquareToRectangleAdapter(sq);
    expect(area(adapter)).toEqual(121);
  });
});