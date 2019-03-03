<template>
    <div class="container">
        <form @submit="addTodo">
            <input 
                type="text" 
                name="title" 
                v-model="title" 
                placeholder="Add Todo">
            <input type="submit" value="Submit" class="button">
        </form>
    </div>
</template>

<script>

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
    padding: 18px;
    /* border-right: none; */
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    /* border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem; */
    border-color: #165f58;
}

.button {
    border-left: none;
    border-color: #165f58;
    transition: all 750ms;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    background: #fff;
    color: #165f58;
}

.button:hover,
.button:focus {
    background: #21897E;
    border-color: #165f58;
}
</style>


