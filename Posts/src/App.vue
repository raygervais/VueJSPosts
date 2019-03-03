<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layout/header';
import milligram from 'milligram';

export default {
    name: "app" ,
    components: {
        Header,
    }  
}
</script>
