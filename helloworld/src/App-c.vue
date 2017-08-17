<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/abouts/">Abouts</router-link></li>
      <li><router-link to="/gogo">Abouts too</router-link></li>
      <ul>
        <li><router-link to="username">About</router-link></li>
        <li><router-link to="business">Tag</router-link></li>
        <li><router-link to="tag">2222</router-link></li>
      </ul>
      <li><router-link to="/aaa/123">aaa</router-link></li>
      <li><router-link to="/bbb/456">bbb</router-link></li>
      <li><router-link to="/ccc/001">cccc</router-link></li>
    </ul>
    <router-view></router-view>
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
</style>
