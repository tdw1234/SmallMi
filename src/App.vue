<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from "./view/HomePage";
export default {
  name: 'App',
  components:{HomePage}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-bottom: 0;
  margin: 0;
  padding: 0;
 }
</style>
