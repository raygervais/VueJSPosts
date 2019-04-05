import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos'

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => {
        return state.todos;
    }
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get(URL);
        commit('setTodos', response.data);
    },

    async addTodo({commit}, title) {
        const response = await axios.post(URL, {
            title, completed: false
        });

        commit('newTodo', response.data)
    },

    async deleteTodo({commit}, id) {
        await axios.delete(URL + '/' + id);
        commit('deleteTodo', id);
    },

    async filterTodo({commit}, event) {
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
        const response = await axios.get(URL + `?_limit=${limit}`);
        commit('setTodos', response.data)
    },

    async updateTodo({commit}, todo) {
        const response = await axios.put(URL + `/${todo.id}`, todo);
        commit('updateTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, update) => {
        const index = state.todos.findIndex(todo => todo.id == update.id);
        
        if(index != -1) {
            state.todos.splice(index, 1, update);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}