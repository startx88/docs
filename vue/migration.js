/**
 * Vue migration guide from v2 to v3:
 *
 * 1. Global Api:
 *    Vue 2.x has many number fo global api and configurations that globally mutate Vue's behaviour.
 *    Ex: to create a global component
 *        Vue.component('button-counter', {
 *           data: () => ({
 *             count: 0
 *           }),
 *           template: '<button @click="count++">Clicked {{ count }} times.</button>'
 *        })
 *
 *    Ex: this is how a global directive declared:
 *        Vue.directive('focus', {
 *           inserted: el => el.focus()
 *        })
 *
 *    The new global api v3:
 *       import { createApp } from 'vue'
 *       const app = createApp({})
 *
 */

/**
 * Vue comparision table for global api:
 * ---------------------------------------------------------------------------
 *    2.x Global API	                              3.x Instance API (app)
 * ---------------------------------------------------------------------------
 * a. Vue.config	                                  app.config
 * b. Vue.config.productionTip	                    removed (see below)
 * c. Vue.config.ignoredElements	                  app.config.isCustomElement (see below)
 * d. Vue.component	                                app.component
 * e. Vue.directive	                                app.directive
 * f. Vue.mixin	                                    app.mixin
 * g. Vue.use	                                      app.use (see below)
 *
 *
 */

/**
 * Configuration Removed or Altered:
 *
 * 1. config.productionTip Removed:
 *    In Vue 3.x, the "use production build" tip will only show up when using the "dev + full build" (the build that includes the runtime compiler and has warnings).
 *
 * 2. config.ignoredElements Is Now config.isCustomElement
 *    Ex:
 *     // before
 *     Vue.config.ignoredElements = ['my-el', /^ion-/]
 *
 *     // after
 *     const app = Vue.createApp({})
 *     app.config.isCustomElement = tag => tag.startsWith('ion-')
 *
 * 3. A Note for Plugin Authors
 *    It is a common practice for plugin authors to install the plugins automatically in their UMD builds using Vue.use.
 *    For instance, this is how the official vue-router plugin installs itself in a browser environment:
 *
 *    var inBrowser = typeof window !== 'undefined'
 *    if (inBrowser && window.Vue) {
 *      window.Vue.use(VueRouter)
 *    }
 *
 *    a. As the use global API is no longer available in Vue 3, Vue.use() - not work in vue 3
 *    b. Instead, the end-user will now have to explicitly specify using the plugin on the app instance:
 *       ex:
 *          const app = createApp({});
 *          app.use(VueRouter)
 */

/**
 * Sharing common configuration Among apps:
 */