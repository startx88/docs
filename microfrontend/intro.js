/**
 * What are microfontend:
 * 1. Divide a monolithic app into multiple, smaller apps.
 * 2. Each smaller app is responsible for a distinct feature of the product.
 *
 *
 * Why use:
 * 1. Multiple engineer team can work in isolation.
 * 2. Each smaller app can easey to understand and make changes to.
 *
 *
 * Integration:
 * 1. There is no single perfect solution for integration
 * 2. Many solutions each have pros and cons
 * 3. Look at what is your requirement then pick a solution.
 *
 *
 * Major categories of integration
 * 1. Build-Time integration (compile time integration):
 *    Before container gets loaded into the browser, it gets access to product list code.
 * 2. Run-Time integration (Client side integration):
 *    After container gets loaded into the braowser, it gets access to product list codde.
 * 3. Server Integration:
 *    While sending down JS to load up container, a server decides on whether or not to include product list source
 *
 *
 *
 * Build-Time Integration:
 * Time:
 *     : 1. Engineer team develop productList
 *     : 2. Time to deploy
 *     : 3. Publish ProductList as an NPM package.
 *     : 4. Team in charge of container install ProductList as a dependency.
 *     : 5. Container team builds their app
 *     : 6. Output bundle that includes all the code for productList.
 * Pros:
 * 1. Easy to setup and understand!
 * Cons:
 * 1. Container to be re-deploye every time when product list updated.
 * 2. Tempting to tightly couple the Container + ProductList together
 *
 * Run-Time Integration:
 * Time : 1. Engineer team develop productList
 *      : 2. Time to deploy
 *      : 3. ProductList code deployed on https://my-app.com/productlist.js
 *      : 4. User navigate to my-app.com, Container app is loaded
 *      : 5. Container app fetches productlist.js and executes it
 * Pros:
 * 1. ProductList can be deployed independently at any time.
 * 2. Different version of productList can be deployed and container can decide which one to use.
 * Cons:
 * 1. Tooling + setup is far more complex
 *
 */