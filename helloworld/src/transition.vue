<template>
  <div id="app">
    <button v-on:click="show = !show">Button</button>
    <transition name="fade">
      <p v-if="show">Hello world!</p>
    </transition>
    <h1>This is Transition</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/parent">Parent</router-link></li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        show: true
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active{
    background: yellow;
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave{
    opacity:0;
  }
</style>



