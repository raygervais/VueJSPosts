<template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
        <span>Double click to mark as complete</span>
        <span>
            <span class="incomplete-box"></span> = Incomplete
        </span>
        <span>
            <span class="complete-box"></span> = Complete
        </span>
        </div>
        <div class="todos">
            <div 
                class="todo" 
                v-for="todo in allTodos"
                @dblclick="onDblClick(todo)"
                v-bind:class="{'is-complete': todo.completed}"
                v-bind:key="todo.id">
                {{todo.title}}  
                <i 
                    @click="deleteItem(todo.id)"
                    class="fa fa-trash-alt"> </i> 
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todos",
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        deleteItem(id) {
            this.deleteTodo(id);
        },
        onDblClick(todo) {
            const update = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            this.updateTodo(update);
        }
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>

<style scoped>

.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo {
    border: solid 1px #cccccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #ffffff;
    cursor: pointer;
    padding: 6px;
}

i:hover{
    border: solid 1px darkgreen;
    bottom:9px;
    right: 9px;
    border-radius: 4rem;
    background: darkgreen;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 750px) {
    .todos {
        grid-template-columns: repeat(2, 1fr);
    } 
}

@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}

</style>
