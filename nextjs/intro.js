/**
 * What is nextjs:
 * The react framwork
 * 1. An intuitive page-base routing system.
 * 2. Pre-rendering, both static generation (SSG) and SSR
 * 3. Automatic code spliting for faster page loads.
 * 4. Client-side routing with optimized prefetching.
 * 5. Built-in CSS and SASS support and support any css in js library.
 * 6. Support hot module replacement for faster development.
 * 7. Api routes to build api endpoints with serverless functions
 * 8. Fully extendable
 */

/**
 * How to add link:
 * import link from 'next/link'
 *
 * <link href="/">
 *  Go to Home
 * </link>
 */

/**
 * How to create layout:
 *
 */

/**
 * How to add meta tag in all pages
 * import head from 'next/head'
 *
 * inside head you can use your head child tag like title, meta, etc
 */

/**
 * How to get router information in next:
 * import Router from 'next/router'
 *
 * 1. Router.onRouteChangeStart=url=>{
 * console.log(url);
 *
 * }
 *
 * 2. Router.onRouteChangeComplete=(done)=>{
 *  console.log(done)
 * }
 *
 * 3. Router.onRouteChangeError=error=>console.log(error)
 */


/**
 * _document.js:
 * _app.js
 */