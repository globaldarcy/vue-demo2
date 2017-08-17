/**
 * Created by Shawn on 2017/8/17.
 */
import Vue from 'vue'
import transition from './transition'
import Router from 'vue-router'

Vue.use(Router);

const Home = {
  template:`
  <div>
    <h2>Home</h2>
    <p>This is Home</p>
  </div>`
}
const Parent = {
  template:`
  <div>
    <h2>Parent</h2>
    <p>This is Parent</p>
  </div>`
}

const router = new Router({
  routes:[
    {path:'/', component:Home},
    {path:'/parent', component:Parent}
  ]
})

new Vue({
  el:'#app',
  router,
  template: '<transition/>',
  components: {transition}
})
