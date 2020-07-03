/**
 * How to use Render Functions:
 *
 */
import { h } from 'vue'
//const App = {
//  render() {
// v-if
// return this.ok
//     ? h('div', { id: 'hello' }, 'Hello')
//     : h('span', 'no data found');

// v-for
// return this.list.map(item => {
//     return h('div', { key: item.id }, item.text)
// })

// deal with slot
// const slot = this.$slots.default ? this.$slots.default() : [];

// you can directly put in the children position
// return h('div', slot); 

// you can map, filter, reduce inside render function
// slot.map(vnode=>{
//  return h('div', [vnode])
// })
//  }
//}


const Stack = {
    render() {
        const slot = this.$slots.default
            ? this.$slots.default()
            : [];

        return h('div', { class: 'stack' }, slot.map(child => {
            return h('div',
                {
                    class: `mt-${this.$props.size}`
                }, [
                child
            ])
        }));
    }
}


/**
 * Example:
 * <Stack size="4">
 *      <div>Hello</div>
 *      <Stack size="4">
 *           <div>Hello</div>
 *           <div>Hello</div>
 *      </Stack>
 * </Stack>
 *
 * <div class="stack">
 *    <div class="mt-4">
 *       <div>Hello</div>
 *    </div>
 *    <div class="stack">
 *      <div class="mt-4">
 *       <div>Hello</div>
 *      </div>
 *    </div>
 * </div>
 */

// <div id="hello">Hello</div>