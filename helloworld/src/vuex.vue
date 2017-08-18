<template>
  <div id="app">
    <h2>Hello Vuex</h2>
    <p>{{ $store.state.count }}</p>
    <p>
      <button v-on:click="$store.commit('up')">button</button>
      <button v-on:click="$store.commit('down')">button</button>
    </p>
  </div>
</template>



