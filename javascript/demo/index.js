

var obj = {
  a: 5,
  print() {
    console.log(this.a)
  }
}

const m = obj.print

m()