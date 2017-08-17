<!--<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {Hello}
}
</script>-->



<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>导航</h1>
    <p>{{ $route.name }}</p>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
  </div>
</template>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.left{
  float: left;
  width:50%;
  background: greenyellow;
  height: 300px;
}
.right{
  float: left;
  width:50%;
  background: silver;
  height: 300px;
}
</style>
