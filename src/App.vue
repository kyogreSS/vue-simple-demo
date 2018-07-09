<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<script>
  export default {
    name: 'App',
    created: function () {
      this.$eventBus.listen(this, 'TEST', (info) => {
        console.warn('测试eventBus', info)
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
