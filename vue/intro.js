/**
 * What is vue:
 * Vue js is javascript progressive framework used to create reusable interface.
 *
 */

/**
 * What is the DOM and Document Object Model?
 * Our browser's interface (API) to change what is displayed on the screen
 * <html>
 *  <head>
 *      <title>My Title</title>
 *  </head>
 *  <body>
 *      <h1>A Heading</h1>
 *  </body>
 * </html>
 *
 * Everything is a node.
 * document
 *   - html (element)
 *     | - head (element)
 *     |     - title (element)
 *     |         - "My Title" (text node)
 *     | - body (element)
 *     |     - h1 (element)
 *     |         - "A Heading" (text node)
 */

/**
 * What is vertual dom:
 * a way of representing actual dom with javascript Object.
 *
 * DOM:
 *  <div>
 *       Hello World
 *  </div>
 *
 * VNode:
 *   {
 *      tag:'div',
 *      children:[
 *          {
 *              text:"Hello World"
 *          }
 *      ]
 *   }
 *   a vertual node
 *
 * Render funcation return vertual DOM nodes
 *  render(h){
 *      h('div', 'hello world')
 *  }
 */

/**
 * Vue core engine:
 * Vue has 3 core module.
 * 1. Reactivity Module
 * 2. Compileter Module
 * 3. Renderer Module
 *
 * 1. Reactivity Module:
 *    Allow us to create js reactive object that can be watched
 *    for changes.
 *
 * 2. Compiler Module:
 *    this takes HTML template and compile them into render function
 *
 *    template => render function
 *    can happen in the brower at tuntime.
 *    can happen when vue project is built
 *
 * 3. Renderer Module:
 *    it has 3 phase
 *    a. Render Phase
 *    b. Mount Phase
 *    c. Patch Page
 *
 *  a. Render Phase:
 *     render function called and return vertual dom node
 *  b. Mount Phase:
 *     takes the vertual dom node and create dom to display on webpage.
 *  c. Patch Phase:
 *     it takes the old vnode and new vnode and compare both
 *     and update only the part of web page which have changed using
 *     dom javascript called.
 */

/**
 * Example: Excecution of simple component
 * There is a template and a reactive object which is used inside the template
 * step-1:
 * Compiler compile template into render function
 * then reactive object are initialize using reactivity module
 * Step-2:
 * Inside the renderer module we enter the render phase which invokes the
 * render function and reference to the reactive object
 * we now watch this reactive object for changes and a render function
 * return vertual dom node.
 * Step-3:
 * Mount phase, the mount phase call using the vertual dom node and crate web page.
 * Step-4:
 * if any changes happen to our reactive object which is been watched
 * renderer invokes the render function again and create new vnode
 * and new vnode and old vnode send to the patch page where they compare
 * and changes refelect on the webpage.
 */