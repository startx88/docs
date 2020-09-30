/**
 * Vue Component:
 * 1. Components are reusable vue instances.
 * 2. They accepts the same option as new Vue.
 * 3. The only exceptions are few root-specific element, like: el
 *
 * 4. Data must be a function in component.
 *
 */

/**
 * 
 * Component declaration: 
 * 
 * */

// Single File Component
`
<temlate>
 <h1>Single file component</h1>
</temlate>
<script>
  export default {
    name:'sfc',
    data:function(){
      return{
        ...data
      }
    }
  }
</script>
`

  // String template
  `
<script>
  export default {
    template:`
"<h1> Single file component</h1>"
  `,
    name:'string-template',
    data:function(){
      return{
        ...data
      }
    }
  }
</script>
`
  // Render function
  `
 <script>
  export default {
    name:'render',
    data:function(){
      return{
        ...data
      }
    },
    render(h){
      return h("div", {
        attrs: {
          class: 'btn-primary',
        },
        on: {
          click: this.handleClick,
        },
      }, 
      this.$slots.default)
    }
  }
</script>
 `
  // JSX 
  `
 <script>
  export default {
    name:'jsx',
    render(){
      return (
        <div>
         <h1>Render function with jsx</h1>
        </div>
      )
    }
  }
 </script>
 `
  // Class based component
  `
 <template>
  <button class="btn-primary" @click.prevent="handleClick">
    <slot></slot>(clicked - {{ count }})
  </button>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default MyBtn extends Vue {
  count = 0;

  handleClick() {
    this.count++;
    console.log('clicked', this.count);
  }
}
</script>

<style scoped>
.btn-primary {
  background-color: blue;
}
</style>
 `

  /**
   * Tere are 7 ways to define component in vuejs:
   * 1. Using Plain string.
   * 2. Template literal.
   * 3. X-template
   * 4. Render
   * 5. JSX
   * 6. Inline Template
   * 7. Single File Component 
   */

  // Declare component using plain string
  `
  import Vue from 'vue'
  Vue.component('my-first-component', {
   template: '<h1 @click="increment"> count value: {{count}}</h1>',
   data: {
     count: 1
   },
   methods: {
     increment() {
       this.count++;
     }
   }
 })
 `
  // Template Literal
  `
 import Vue from 'vue'
 Vue.component('my-first-component', {
  template: `
"<h1 @click='increment'> count value: {{ count }}</h1>"
  `,
  data: {
    count: 1
  },
  methods: {
    increment() {
      this.count++;
    }
  }
})
`

  // X-Template

  `
  Vue.component('my-checkbox', {
    template: '#checkbox-template',
    data() {
      return { checked: false, title: 'Check me' }
    },
    methods: {
      check() { this.checked = !this.checked; }
    }
  });

  // add below code inside html file
  <script type="text/x-template" id="checkbox-template">
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checkbox: true, checked: checked }"></div>
    <div class="title">{{ title }}</div>
  </div>
</script>
`

  // Inline template
  `
Vue.component('my-checkbox', {
  data() {
    return { checked: false, title: 'Check me' }
  },
  methods: {
    check() { this.checked = !this.checked; }
  }
});

<div id="app">
  ...
  <my-checkbox inline-template> // inline template
    <div class="checkbox-wrapper" @click="check">
      <div :class="{ checkbox: true, checked: checked }"></div>
      <div class="title">{{ title }}</div>
    </div>
  </my-checkbox>
</div
`

  // Render function for this see above.

  // JSX see above

  // Single file component see above



  /***
   * Component Communication:
   * Q: how many ways the component has to communication
   * A: There are three ways coponent communicate to one-another.
   *    1. Parent to child communication (Using props)
   *    2. Child to parent communication (Using events with $emit('event name', payload))
   *    3. For cross-component communication using Event Bus
   */

  // Parent to child relationship
  `
 <template>
  <div>
    <Car color="green" /> // this Car is a child component and passing color props
  </div>
</template>

<script>
import Car from './components/Car'

export default {
  name: 'App',
  components: {
    Car
  }
}
</script>
 `

  // Child to Parent
  `
 <script>
export default {
  name: 'Car',
  methods: {
    handleClick: function() {
      this.$emit('clickedSomething')  // emit an event to hit the parent event.
    }
  }
}
</script>
 `