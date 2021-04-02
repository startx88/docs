/**
 * View Router:
 *
 * Option Api:
 * this.$route  => for current route
 * this.$router => for routers
 *
 * Composition Api
 * useRoute  => for current route
 * useRouter => for rotuers
 *
 *
 * Props:
 *
 * 1. Boolean mode:
 * props set to "true" in route path for using param as component props,
 * it allows you to use anywhere in the component.
 *
 * 2. Props for Named views
 * For routes with named views, you have to define the props option for each named views.
 * Ex:
 * const routes =[
 *     {
 *        path:'/user',
 *        props:{default:true, sidebar:false},
 *        component:User
 *      }
 * ]
 *
 * 3. Object Mode:
 *  if props is an object, it will be set as the component props as-is; usefull when the props are static
 *  const routes =[
 *     {
 *        path:'/user',
 *        props:{isModal:true},
 *        component:User
 *      }
 * ]
 *
 * 4. Function Mode
 * You can create a function that return props. this allow you to cast parameter into other types
 * Combine static value with route base value.
 */

/**
 * Route Navigation guards:
 * navigation guards are divided into three category
 * 1. Global Guard.
 *    a. beforeEach
 *    b. afterEach
 *    c. beforeResolve
 * 2. Per-route guard
 *    a. beforeEnter
 * 3. In component Guard
 *    a. beforeRouteEnter
 *    b. beforeRouteLeave
 *    c. beforeRouteUpdate
 *
 *
 * Globally Guard:
 * 1. Global before guard are called in creation order.
 */