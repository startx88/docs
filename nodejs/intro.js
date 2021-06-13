/**
 * What is nodejs:
 * It is a javascript run-environment built on top of chroms v8 engine.
 *
 * Single threaded
 * Event driven
 * Non-blocking
 * I/O model
 *
 * Perfect for building fast and scalabe data-intensive apps.
 *
 *
 */








/**
 * How node works internally:
 *
 * Javascript Code we write ====> NodeJs ====> V8 + livuv
 *
 * nodejs has the collection of dependencies.
 *
 * Nodejs=>70% c++ and 30% js
 * V8 + livuv => 100% c++
 *
 *
 * livup is c++ open source project.
 *
 */

/**
 * process.binding() => connects js with c++ function
 *
 */

/**
 * What is event loop:
 *
 *
 * Process: it is an instance of computer program that is being executed.
 * within a single procees has multiple things that called thread.
 * single process can have multiple threads.
 *
 * OS Scheduling: decides which thread shoul be processed.
 *
 *
 * Node automatically create one thread.
 * execute code inside this thread.
 *
 * inside single thread that is called event loop.
 *
 * How event loop works:
 *
 */


/********
 * Read file async:
 * fs.readFile(path.join(__dirname, 'my.txt'), 'utf-8', (error, res) => {
 *   if (error) return;
 *   console.log(res)
 * })
 */

/**
 * node event loop =======> single threaded
 *
 * some of node Framework/Std lib ===========> Not single threaded
 *
 * note:
 * some of nodejs function and library are not executed inside event loop (single threaded)
 * theyn run outside of single thread
 *
 */