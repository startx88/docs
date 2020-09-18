const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('Admin12345', 'b', 100000, 512, 'sha512', () => {
  console.info('1:', Date.now() - start)
})

crypto.pbkdf2('Admin12345', 'b', 100000, 512, 'sha512', () => {
  console.info('2:', Date.now() - start)
})

crypto.pbkdf2('Admin12345', 'b', 100000, 512, 'sha512', () => {
  console.info('3:', Date.now() - start)
})

crypto.pbkdf2('Admin12345', 'b', 100000, 512, 'sha512', () => {
  console.info('4:', Date.now() - start)
})

crypto.pbkdf2('Admin12345', 'b', 100000, 512, 'sha512', () => {
  console.info('5:', Date.now() - start)
})


// let see the diagram
/**
 *  Javascript Code we write
 *
 *  pbdkf2
 *
 *  V8
 *
 *  Node's C++ Side
 *
 * ----------------------------------
 * -           LivUV                -
 * -   Thread    Thread#1, Thread#2 -
 * -   Pool      Thread#3, Thread#4 -
 * ----------------------------------
 */

