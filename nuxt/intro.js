/**
 * What is nuxt:
 * 1. it is a vue js framework for creating SSR (Universal) or SPA application
 * 2. Auto import component
 * 3. Configuration via file and folder structure
 * 4. Auto route configuration using file and folder structure.
 * 5. SEO friendly
 *
 * What are 7 problems nuxt solve that have vue for build a app.
 * 1. Building from scratch is difficult
 *    a. vuex=>vue-router=>vue-meta + intelligent defaults
 * 2. No standard folder structure
 * 3. Routing config can get lengthly
 * 4. No standard way to configure
 * 5. Not SEO friendly
 * 6. Vue apps can load slowly
 * 7. Difficult o change behavior of framework
 *
 *
 * Q: How to create nuxt app?
 * A: there are tow way to create nuxt app.
 *    1. Using Nuxt Cli
 *    2. Create mannually
 *
 * 1. Using Nuxt Cli
 *    a. Open cmd
 *    b. type npx create-nuxt-app app-name
 *    c. select approperiate option
 * 2. Create Mannually
 *    a. cerate folder
 *    b. yarn add nuxt
 *    c. create package.json or edit
 *       scripts:{
 *        "dev":"nuxt",
 *        "build":"nuxt build",
 *        "generate":"nuxt generate",
 *        "start":"nuxt start"
 *      }
 *
 * What is package.json file
 * The package.json si like the ID card of your project.
 * It Contains all the project dependencies and much more.
 *
 *
 * Nuxt directory structure:
 * 1. Pages         : Directory contains you application's views and routes
 * 2. Layouts       :
 * 3. Components    : put all your vue.js components
 * 4. Static        : it is mapped to the server root and contains files that have keep their names (robots.txt) or likely won't change(e.g. the favicon)
 * 5. Assets        : Contains your uncompiled assets such as styles, images, or fonts.
 * 6. Middleware    :
 * 7. Plugins       :
 * 8. Modules       :
 * 9. Nuxt.config.js: it is the single point of configuration for nuxt.js
 * 10.
 *
 *
 */