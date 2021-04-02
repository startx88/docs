/**
 * Views:
 * 1. The views describes all pages for routes
 * 2. Views consist of an app template, a layout and the actual page.
 * 3. You can define custom meta tags for the head section of each page
 * 4. Which are important for seo
 *
 * Views Layout:
 *
 * --------------------- Document - HTML file ------------------------------
 *    --- Layout - Vue component + Nuxt options: middleware and head ----
 *        --- Page - vue component supercharged with nuxt options ---
 *               a. asyncData   b. fetch    c. head   d. layout
 *               e. middleware  f. scrollToTop  g. transition
 *               h. validate
 *        1. Optional - Page child
 *           Vue component supercharged with nuxt options
 *        2. Optional - Vue component + Nuxt option: head
 *        3. Optional - Vue component + Nuxt option: head
 *
 *
 * Pages:
 * index.vue
 *
 * <template>
 *   <h1 class="red">Hello World</h1>
 * </template>
 *
 * <script>
 *   export default {
 *     head() {
 *       // Set Meta Tags for this Page
 *     }
 *     // ...
 *   }
 * </script>
 *
 * <style>
 *   .red {
 *     color: red;
 *   }
 * </style>
 *
 *
 */

/**
 * .nuxt:
 * 1. The .nuxt directory is so-called build directory.
 * 2. It is dynamically generated and hidden by default.
 * 3. Inside the directory you can find autometically generated files
 *    when using nuxt dev or nuxt build comman
 *
 * Note: .nuxt directory should not be committed to your version control
 *
 * The buildDir property:
 * By default, many tools assume that .nuxt is a hidden directory.
 * you can use the "buildDir" option to prevent that.
 * If you do change the name.
 *
 * nuxt.config.js
 * export default {
 *   buildDir:'nuxt-dist'
 * }
 *
 */