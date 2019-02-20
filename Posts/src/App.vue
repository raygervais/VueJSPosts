<template>
  <div id="app">
    <Header />
    <Todos 
      v-bind:todos="todos" 
      v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from './components/Todos';
import Header from './components/layout/header';

export default {
  name: 'app',
  components: {
    Todos,
    Header
  },
  data () {
    return {
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": true
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
