/**
 * What is web worker:
 * Worker is a javscript program that perform task in background.
 * without affecting the user interface.
 *
 * Worker thered can perform I/O using XMlHttpRequest or fetch.
 * Once created worker send messages to the javscript code.
 *
 * There are two types of worker:
 * 1. Dedicated worker.
 * 2. Shared workder.
 *
 * How to create a worker:
 * A worker is an object created using a constructor Worker();
 *
 * const worker = new Worker(filePath);
 *
 *
 *
 * Due to multi-threaded behaviour worker has some limitations.
 * Available feature:
 * 1. Navigation object.
 * 2. Location Object.
 * 3. XMLHttpRequest.
 * 4. setTimeout/clearTimeout.
 * 5. setInterval/clearInterval.
 * 5. Appliction cache.
 * 7. import external script using importScript() method.
 * 8. Spawning other web workers.
 * 
 * 
 * 
 * Worker do not have access to:
 * 1. DOM
 * 2. Windows
 * 3. Document
 * 4. parent obejct
 * 
 * 
 * If you want your worker script to be interpreted as a module script instead of the default classic script, 
 * you need to use a slightly different signature:
 * var worker = new Worker('helper.mjs', { type: "module" });
 * */

// create worker
const worker = new Worker("fetch.js");

// initialize worker;
worker.postMessage(arugument);