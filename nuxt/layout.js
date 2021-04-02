/**
 * Layouts:
 * layouts are a great help when you want to change the look
 * and feel of your nuxt app.
 *
 * If you want to add header , footer and sidebar for all pages.
 *
 * using layouts:
 *
 * Step:
 * 1. create layouts folder
 * 2. add default.vue file inside layout folder, it is default for all pages.
 *    e.g. <template>
            <Nuxt /> // it render the page component here
           </template>

 *
 *
 *
 * Custom Layout:
 * You can create custom layouts by adding a .vue file to the layouts directory.
 * and set layout property in the page component where you want to use that layout
 *
 * e.g:
 * layouts
 *   > blog.vue
 *      <template>
 *        <div>
 *          <div>My blog navigation bar here</div>
 *          <Nuxt />
 *        </div>
 *      </template>
 *
 * pages:
 *  > blog.vue (page component)
 *    <template>
 *      <!-- Your template -->
 *    </template>
 *    <script>
 *      export default {
 *        layout: 'blog'
 *        // page component definitions
 *      }
 *    </script>
 *
 * Error Page:
 * the error page is a page component which is always displayed when an error occurs.
 * That does not happen when server side rendering
 * Layouts => error.vue
 * e.g. layouts/error.vue
 *
 * <template>
 *   <div>
 *     <h1 v-if="error.statusCode === 404">Page not found</h1>
 *     <h1 v-else>An error occurred</h1>
 *     <NuxtLink to="/">Home page</NuxtLink>
 *   </div>
 * </template>
 *
 * <script>
 *   export default {
 *     props: ['error'],
 *     layout: 'error' // you can set a custom layout for the error page
 *   }
 * </script>
 *
 *
 *
 * Document: App.html
 * The app template is used to create actual HTML frame of your document for your nuxt.js app.
 * This file is created automatically for you and in general rarely needs to be modified.
 * If you can customise the HTML app template used by Nuxt.js to include scripts of conditional
 * css.
 *
 */