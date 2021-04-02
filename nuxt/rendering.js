/**
 * Rendering
 *
 * 1. Server side rendered sites and static sites:
 * SSR sites: server side rendered sites are rendered on the server each time
 *      the user request a page.
 * Static sites: Static sites are very similar to server-side rendered application
 *      with the main difference begin that static sidtes are rendered at build time.
 *      therefore no server is needed. navigation from one page to another is then on the client side.
 *
 *
 * nuxt.config.js
 * export default {
 *    ssr:true // you do not need to add ssr:true it is by default
 * }
 *
 * Client side rendering only:
 * nuxt.config.js
 * export default {
 *    ssr:false // you do not need to add ssr:true it is by default
 * }
 */