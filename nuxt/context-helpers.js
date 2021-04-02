/**
 * Context:
 * The context is an additional collection of data
 * that is available in Nuxt lifecycle hooks.
 *
 * The context object is available in specific nuxt functions.
 * ex: asyncData, plugins, middleware and nuxtServerInit.
 *
 * It provides additional and often optional information about
 * the current request to the application.
 *
 * First and foremost, the cnotext is used to provide access
 * to other parts of nuxt.js application,
 * e.g. The vuex store or the underlying connect instanc
 *      we have req, res objects in the context availabel
 *      on the server side and store always available.
 *
 * const {
 * app,
 * store,
 * route,
 * params,
 * query,
 * env,
 * isDev,
 * isHMR,
 * redirect,
 * error,
 * $config
 * } = context
 *
 *
 * // only available on the server side
 * if(process.server){
 *   const { req, res, beforeNuxtRender } = context
 * }
 *
 * // only available on the client side
 * if(process.client){
 *   const { from, nuxtState } = context
 * }
 */