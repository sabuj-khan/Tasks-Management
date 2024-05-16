<script setup>
/* Import all liabraries */
import { onMounted } from 'vue';
import { useTodosStore } from './stores/tasks.js'

/* All instance and variables */
const todoStore = useTodosStore();

/* All methods */

/* Hooks, Computed, waitch etc */

onMounted(()=>{
    todoStore.getAllTodos();
})

</script>

<template>
    <div class="container">
        <div class="row mt-5 ">
            <div class="col-md-12 p-2">
                <div class="card">

                    <div class="card-body">
                        <h4 class="card-title text-center">Task List</h4>
                        <div class="row">
                            <form action="">
                                <div class="col-md-12">
                                    <label for="atask" class="form-label">
                                        <span v-if="!todoStore.isEdit">Add New Task</span>
                                        <span v-else>Update Task</span>
                                    </label>
                                    <input type="text" name="" class="form-control" id="atask" v-model="todoStore.taskform.title">

                                    <div v-if="!todoStore.isEdit">
                                        <input type="submit" class="submit btn btn-primary mt-3" value="Add Task" @click.prevent="todoStore.createTodos">
                                    </div>
                                    <div v-else>
                                        <input type="submit" class="submit btn btn-danger mt-3" value="Update Task" @click.prevent="todoStore.updateTask(todoStore.editId)">
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title text-danger">Tasks</h4>
                        <div class="row">
                            <ul class="list-group">
                                <li v-for="task in todoStore.tasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <!-- <input @change="todoStore.completeTask(task.id)" type="checkbox" name="" id="" class="me-2 form-check-input"> -->
                                        <span :class="task.completed ? 'text-decoration-line-through' : ''">{{ task.title }}</span>
                                    </div>
                                    

                                    <div>
                                        <button @click.prevent="todoStore.getTask(task.id)" class="btn"><i class="fa fa-edit" aria-hidden="true"></i></button>


                                        <button @click.prevent="todoStore.deleteTask(task.id)" class="btn"><i class="fa fa-trash" aria-hidden="true"></i></button>

                                        
                                            <button  v-if="!task.completed" @click.prevent="todoStore.completeTask(task.id)" class="btn btn-primary">Complete Task</button>

                                            <button v-else class="btn btn-success">Completed Task</button>
                                        

                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
  
</template>

<style scoped>

</style>
