/**
 * Template: Vue template
    <template>
        <div>
            <div>
                <span>Hello</span>
            </div>
        </div>
    </template>
*/
/**
 * Vue compiler compile the template code into render function as give below
 */

function render() {
    return h('div', [
        h('div', [
            h('span', 'Hello')
        ])
    ])
}

/**
 * Abobe render function create vdom like below given.
 */

const vdom = {
    tag: 'div',
    children: [
        {
            tag: 'div',
            children: [
                {
                    tag: 'span',
                    children: 'Hello'
                }
            ]
        }
    ]
}

/**
 * With the playing structure like above vdom, the job
 * of render function is to create vnode, its have to
 * snapshot of vertual dom tree like above
 * if we change any thing renderer dosen't really don't know
 * what change it have relativly goes to brutforce algorithm.
 * to recursively walk the vdom tree comare the old vdom and new vdom
 * to figure about what change.
 */
