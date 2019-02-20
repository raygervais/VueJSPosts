<template>
    <div 
        class="todo-item" 
        v-bind:class="{'is-complete': todo.completed}">
        
        <input 
            type="checkbox" 
            v-on:change="markComplete">

        {{todo.title}}

        <button 
            @click="$emit('del-todo', todo.id)"
            class="del">X</button>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = true;
        }
    }
}
</script>

<style>
.todo-item {
    padding: 8px 16px;
    background: #f4f4f4;
    border-bottom: 1px dotted #ccc;
    margin: auto;
}

.is-complete {
    text-decoration: line-through;
}

.del {
    float: right;
    border-radius: 24px;
    border: solid 1px #AAA;
    background: #FFF;
}
</style>


