<template>
  <div id="app">
    <AddTodo 
      v-on:add-todo="addTodo"/>
    <Todos 
      v-bind:todos="todos" 
      v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from '@/components/Todos';
import AddTodo from '@/components/AddTodo';
import uuid from 'uuid';
import axios from 'axios';
import state from '@/state';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
    
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.todos = this.todos.filter(todo => todo.id != id))
            .catch(err => console.error(err));
    },
    addTodo(todo) {
        const { title, completed } = todo;
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed
        })
        .then(res => {
            // Fixes all Ids returning with '201' since it's a mock API
            res.data.id = uuid.v4();
            this.todos = [...this.todos, res.data];
          })
        .catch(err => console.error(err));
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.todos = res.data)
      .catch(err => console.error(err));
  } 
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 48px;
}

</style>
