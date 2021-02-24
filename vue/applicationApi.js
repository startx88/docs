/**
 * What are the application api:
 * In vue 3, APIs that globally mutate the vue's behaviour
 * are moved to application instances created by the new
 * createApp method.
 * 
 * Calling createApp returns an application instance. 
 * This instance provides an application context.
 */
const { ref, createApp, h } = Vue;




const App = {
  template: `
     <h1 v-bg-color:font-size="120">{{count}}</h1> 
     <my-demo 
      name="ehllo" 
      class="one" 
     :count="count" @increment="counter"></my-demo>
     `,
  setup() {
    const count = ref(1);
    function counter() {
      count.value++
    }
    return {
      count,
      counter
    }
  }
}

const app = createApp(App)
app.directive('bg-color', {
  mounted(el, binding) {
    console.log(el, binding)
    const key = binding.arg || 'color'
    el.style[key] = binding.value + 'px'
  }
})

app.component('my-demo', {
  inheritAttrs: false,
  template: `
  <div>
     <span v-bind="$attrs" @click="$emit('increment')">{{count}}</span>
     <my-text v-model:title="val"></my-text>
     {{val}}
    </div>
  `,
  emits: ["increment"],
  props: {
    count: Number
  },
  data() {
    return {
      val: this.count
    }
  },
  watch: {
    count(n) {
      this.val = n
    }
  },
  mounted() {
    console.log(this.val, 'h')
  }
})

app.component('my-text', {
  template: `
    <input type="text" :value="Number(title)" @input="$emit('update:title', $event.target.value)" />
  `,
  props: {
    placeholder: {
      type: String,
      default: 'enter value'
    },
    title: Number
  },
  data() {
    return {
      value: this.title
    }
  },
  mounted() {
    console.log(this.value, 'h')
  }
})

app.mount('#app')