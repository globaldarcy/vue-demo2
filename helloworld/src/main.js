// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/


/*import transition from './transition.vue'
import Vue from 'vue'
import router from './router-d'

var vm = new Vue({
  el:'#app',
  router,
  data:{
      show: true,
      aaa:'fade'
  },
  watch:{
    '$route'(to, from){
      //console.log(to,from);
      if(from.path == '/parent' ){
        this.aaa ='fadeIn';
      }else{
        this.aaa = 'fade';
      }
    }
  },
  render: x => x(transition)
})*/

import Vue from 'vue'
import store from './store'
import vuex from './vuex'

new Vue({
  el:'#app',
  store,
  render: x => x(vuex)
})
