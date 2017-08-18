<template>
  <div id="app">
    <!--<button v-on:click="show = !show">Button</button>-->
    <!--<transition name="fade">-->
      <!--<p v-if="show">Hello world!</p>-->
    <!--</transition>-->
    <!--<button v-on:click="back">back</button>-->
    <h1>This is Transition</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/parent">Parent</router-link></li>
      <li><router-link to="/sdfdsf">404231</router-link></li>
    </ul>
    <!--<transition v-bind:name="aaa" mode="out-in">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
  </div>
</template>

<!--<script>
  export default {
    name: 'app',
    data () {
      return {
        show: true,
        aaa:'fade'
      }
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
    methods:{
      back:function () {
        console.log(router)
      }
    }
  }
</script>-->

<style scoped>
  .fade-enter-active, .fade-leave{
    background: yellow;
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-active{
    opacity:0;
  }
  .fadeIn-enter-active, .fadeIn-leave{
    background: mediumvioletred;
    transition: opacity 5s;
    color: red;
  }
  .fadeIn-enter, .fadeIn-leave-active{
    opacity:0;
  }
</style>



