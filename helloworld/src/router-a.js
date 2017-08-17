/**
 * Created by Shawn on 2017/8/17.
 */
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

Vue.use(Router);

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default:Home,
        left:NotFound,
        right:About
      }
    },
    {
      path: '/about',
      name: 'About',
      components:{
        default:About,
        right:NotFound,
        left:About
      }
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
