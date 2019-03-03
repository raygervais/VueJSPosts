<template>
    <header class="container header">
        <h1>Todos for Vue</h1>
        <div id="nav">
            <router-link to="/home">Home</router-link> 
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    .header a {
        padding: 5px 10px;
        text-decoration: none;
        color: #69A2B0;
        transition: all 250ms;
    }

    .header a:hover {
        background: #eeef;
    }

    .header .router-link-active{
        border-bottom: solid 1px #165f58;
        color: #165f58;
    }
</style>

