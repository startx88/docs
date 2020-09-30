let price = 10;
let qty = 2;
let total = 0

let storage = [];
let target = () => total = price * qty; // store it someware so it can run every time when value change in property
function record() { storage.push(target) } // store the target function
function replay() { storage.forEach(run => run()) } // run all target function

// store
record();
replay();

