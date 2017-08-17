/**
 * Created by Shawn on 2017/8/17.
 */
import Vue from 'vue'
import App from './App-c'
import Router from 'vue-router'

Vue.use(Router);

const  abouts = {
  template:`
  <div>
    <h2>Abouts</h2>
    <router-view></router-view>
  </div>
  `
}

const about = {
  template:`
  <div>
    <h3>this is about</h3>
    {{$route.params.username}}
    {{$route.query.aaa}}
  </div>
  `
}

const home = {template:`<div><h2>This is Home!</h2></div>`}
const business = {template:`<div><h2>This is business!</h2></div>`}

const router = new Router({
  routes:[
    {path:'/', component:home},
    {path:'/abouts', component:abouts, alias:'/gogo',
      children:[
        {path:'/'},
        {path:'username', name:'about', component:about},
        {path:'tag', name:'business', redirect:'username'},
        {path:'/aaa/:id', component:home},
        {path:'/bbb/:id', redirect:'/aaa/:id'},
        {
          path:'/ccc/:id',
          redirect: function (foo) {
            if(foo.params.id === '001'){
              return '/';
            }
          }
          /*redirect: foo => {
            const {hash, params, query} = foo;
            if(params.id === '001'){
              return '/';
            }
          }*/
        }
      ]
    }
  ]
})

new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components: { App }
})
