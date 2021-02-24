/**
 * config is an object in vue application that
 * container global configuration.
 */

import { createApp } from 'vue'

const App = {
  template: `
   <h1>{{count}}</h1>
  `,
  data() {
    return {
      count: 0
    }
  }
}

const app = createApp(App);

// 1. errorHandler
// type:Function, default:undefined
app.config.errorHandler = (err, vm, info) => {
  // error handler
  // info is a vue-specific error info. 
}

/**
 * 2. warnHandler
 * assign a custom handler for runtime vue warnnings. 
 * Note: this only work during development
 * type: [key: string]:any
 * default: undefined,
 */

app.config.warnhandler = (msg, vm, trace) => {
  // `trace` is the component hierarchy trace
}

/**
 * 3. globalProperties
 * Allow you to add global properties that can be accessed in any component
 * instance inside the application.
 * 
 * Note: component property will take priority when there are conflicting keys.
 * Type:[key: string]:any
 * default: undefined
 * 
 * This can replace Vue 2.x Vue.prototype extending:
 * 
 * Before:
 * Vue.prototype.$http = () => {}
 * 
 * After:
 * app.config.globalProperties.$http = () => {}
 */
app.config.globalProperties.foo = 'bar';
app.component('child-component', {
  mounted() {
    console.log(this.foo) // 'bar'
  }
})


/**
 * 4. isCustomElement
 * type: (tag:string)=>boolean
 * default: undefined
 * 
 * Specified a method to recognize custom elements defined
 * outside of Vue (e.g. using the Web Component APIs).
 * 
 * 
 */
app.config.isCustomElement = tag => tag.startsWith('icon-');


/**
 * 5. optionMergeStrategies
 * type: {[key: string]:function},
 * default: {}
 * 
 * Define merging strategies for custom options.
 * the merge strategy receives the value of that option
 * defined on the parent and child instances as the first and second arguments.
 */
app.config.optionMergeStrategies.customOption = (toVal, fromVal) => {
  // return mergedVal
}

/**
 * 6. performance
 * type:boolean
 * default:false
 */


app.mount('#app')