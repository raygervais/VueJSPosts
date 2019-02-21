<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layout/header';

export default {
    name: "app" ,
    components: {
        Header
    }  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #FFF;
  padding: 7px 20px;
  cursor: pointer;
}
</style>
