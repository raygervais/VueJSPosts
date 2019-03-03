<template>
    <div>
        <transition-group name="list" tag="div">
            <div class="container" v-bind:key="todo.id" v-for="todo in todos">
                <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
            </div>
        </transition-group>
    </div>
</template>


<script>

import TodoItem from './TodoItem.vue'

export default {
    name: "Todos",
    props: ["todos"],
    components: {
        TodoItem
    }
}

</script>

<style scoped>

.container:not(:last-child){
    border-bottom: solid 1px rgba(94, 101, 114, 0.15);
    margin-bottom: 16px;
}

.list-enter-active, .list-leave-active {
  transition: all 175ms;
}

/* .list-leave-active below version 2.1.8 */ 
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

</style>

