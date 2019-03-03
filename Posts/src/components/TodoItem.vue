<template>
    <div 
        class="todo-item row" 
        v-bind:class="{'is-complete': todo.completed}">

        <div class="column column-10">
            <button 
                @click="markComplete"
                class="button-outline button-small mark">&#10004;</button>
        </div>
        
        <div class="column column-80">
            <p>{{todo.title}}</p>
        </div> 

        <div class="column column-10">
            <button 
                @click="$emit('del-todo', todo.id)"
                class="button-outline button-small del">X</button>    
        </div>
        
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style>
.row {
    flex-direction: inherit;
    
}

p {
    overflow-wrap: break-word;
    padding: auto;
    margin-top: 2px;
    padding-left: 2rem;
    text-transform: capitalize;
}

.button-outline.del {
    border-radius: 1rem;
    border-color: #AF3E4D;
    transition: all 750ms
}

.button-outline.del:hover {
    border-color: rgb(117, 41, 52);
    background: #AF3E4D;
    color: #ffffff;
    border-radius: 2em;
}

.button-outline.mark,
.button-outline.mark:focus{
    border-color: #165f58;
    color: #ffffff;
    background: #69A2B0;
    transition: all 750ms;
    font-weight: bolder;
        border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
}

.button-outline.mark:hover,
.is-complete .button-outline.mark:hover {
    background: #165f58;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
    color: #fff;
}

.button-small {
  font-size: .8rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 1.5rem;
}


.is-complete {
    text-decoration: line-through;
}

.is-complete .button-outline.mark {
    background: rgba(94, 101, 114, 0.603);
    border-color: rgba(94, 101, 114, 0.603);
}
</style>


