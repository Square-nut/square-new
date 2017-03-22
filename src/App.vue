<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 800px;
  height: 800px;
  /*margin-top: 60px;*/
  margin:auto;
}
ul,ol{
	margin: 0;
	padding: 0;
}
ul,ol{
	list-style: none;
}
</style>
