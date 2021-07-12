<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import 'buefy/dist/buefy.css';
const TAG = "App";
export default {
  name: 'App',
  data(){
    return {
      db : {},
      commonName : "home"
    }
  },
  components: {
  },
  mounted(){
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
