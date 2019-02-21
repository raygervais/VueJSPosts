<template>
    <div>
        <form @submit="addTodo">
            <input 
                type="text" 
                name="title" 
                v-model="title" 
                placeholder="Add Todo">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid';

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();

            if (this.title == "") {
                return;
            }

            const newTodo = {
                // id: uuid.v4(),
                title: this.title,
                completed: false
            } 

           // Send via Emit
           this.$emit('add-todo', newTodo)
           this.title = '';
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 5px;
}

input[type="submit"] {
    flex: 2;
}
</style>


