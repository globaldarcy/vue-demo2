/**
 * Created by Shawn on 2017/8/17.
 */
import Vue from 'vue'
import Parent from './Parent'
import Router from 'vue-router'

Vue.use(Router);

const Home = {
  template:`
  <div>
    <h2>Home</h2>
    <p>This is Home</p>
  </div>`
}


const notFound = {
  template:`
  <div>
    <h2>Not Found123</h2>
    <p>This is 404</p>
  </div>`,
  beforeRouteEnter:(to, from, next) => {
    console.log(to, from)
    next()
  },
  beforeRouteLeave:(to, from, next) => {
    console.log(to, from)
    next()
  }
}

const router = new Router({
  mode:'history', //去掉 URL # 'http://localhost:8080/#/'
  routes:[
    {path:'/', component:Home},
    {path:'/parent', component:Parent,
      beforeEnter:(a,b,next) => {
        //console.log(a, b)
        //next()
        //next(false)
        next({path:'/sdfsdsfsdfsdf'})
      }
    },
    {path:'*', component:notFound}
  ]
})




