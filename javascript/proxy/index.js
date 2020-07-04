/**
 * What is proxy in javascript:
 * Proxy is an object in javascript that wrap another object and intercept of fundamental operation of 
 * the target object.
 * 
 * The fundamental operation can be:
 * 1. lookup
 * 2. assignment
 * 3. enumration
 * 4. function invocation
 * 
 * syntax:
 * const proxy = new Proxy(target, handler);
 * 
 * 1. target: is an object that proxy wrap
 * 2. handler: is an object that contain methods to control the behaviour of target. 
 *    the method inside the handler object are called trap.
 */

function observer(data) {
    const updater = {}
    return new Proxy(data, {
        get(target, props) {
            if (watcherFunc) {
                if (!updater[props]) updater[props] = [];
                updater[props].push(watcherFunc)
            }
            return target[props];
        },
        set(target, props, value) {
            target[props] = value;
            if (updater[props]) {
                updater[props].forEach(item => item());
            }
        },
    });
}

function watch(target) {
    watcherFunc = target;
    target()
    watcherFunc = null;
}

const data = observer({
    dinnerPrice: 100,
    tip: 9,
    total: 0,
    multi: 0
});

watch(() => {
    data.total = data.dinnerPrice + data.tip
})

watch(function render() {
    document.getElementById('root').innerHTML = `
        <table id="table" class="table table-bordered col-sm-4 offset-sm-4 mt-4">
         <tr>
          <th>Dinner Price</th><td>${data.dinnerPrice}</td><td>
            <button @click="incrementPrice">+</button>
            <button @click="decrementPrice">-</button>
          </td>
         </tr>
           <tr>
          <th>Tip</th><td>${data.tip}</td><td>
          <button @click="incrementTip">+</button>
            <button @click="decrementTip">-</button></td>
         </tr>
           <tr>
          <th>Total</th><td>${data.total}</td><td></td>
         </tr>
        </table>
    `
});

const methods = {
    incrementPrice() {
        data.dinnerPrice++
    },
    decrementPrice() {
        data.dinnerPrice--
    },
    incrementTip() {
        data.tip++
    },
    decrementTip() {
        data.tip--
    }
}

document.getElementById('root')
    .addEventListener('click', event => {
        const click = event.target.attributes['@click'];
        console.log(event, click.value)
        const name = click && click.value;
        const method = methods[name];
        if (method) {
            method()
        }
    });




