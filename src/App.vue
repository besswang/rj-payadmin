<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    let id = window.sessionStorage.getItem('userId')
    console.log(process.env.BASE_URL)
    console.log(process.env.NODE_ENV)
    if(!id){
      this.$router.push('/login')
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
</style>
