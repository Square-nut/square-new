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
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 800px;
  height: 800px;
  /*margin-top: 60px;*/
  margin:auto;
}
ul,ol,p{
	margin: 0;
	padding: 0;
}
ul,ol{
	list-style: none;
}
img{
	border: 0;
}
</style>
