import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { main } from '@popperjs/core';

export const useTodosStore = defineStore('todos',{
  
    state: () => ({
        tasks: [],
        taskform: {
            userId: 1,
            title: null,
            completed: false
        },
        isChecked: false,
        editId: 0,
        isEdit: false
    }),

    getters: {

    },

    actions: {
        async getAllTodos(){
            
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
            
            this.tasks = data;
            //console.log(data);
        },

        async createTodos(){
            
            const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', this.taskform);

            console.log(data);

            this.tasks.push(data);
            this.tasks.reverse();
            this.taskform.title = null;          
        },

        async deleteTask(id){
            const values = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

            //console.log(data);

            this.tasks = this.tasks.filter(task => {
                return task.id != id;
            })

        },


        async getTask(id){
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

            console.log(data);
            this.taskform.title = data.title;
            this.taskform.userId = data.userId;
            this.taskform.completed = data.completed;
            this.isEdit = true;
            this.editId = id;
        },

        async updateTask(id){
            const { data } = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, this.taskform);

            this.tasks.push(data);
            this.tasks.reverse();
            this.taskform.title = null;  
            this.isEdit = false;
            
        },

        async completeTask(id){

        
           
        },

        async completeTask(id) {
            
             await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed: true });
            
                
                const task = this.tasks.find(task => task.id === id);
                     if (task) {
                        task.completed = true;
                     }
                
                    
        },
        

        
        

        






    }

})
