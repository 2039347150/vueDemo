<template>
   <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo" ></TodoHeader>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
        <TodoFooter></TodoFooter>
      </div>
    </div>
</template>
<script>
  import TodoList from   './components/Todo/TodoList.vue'
  import TodoHeader from './components/Todo/TodoHeader.vue'
  import TodoFooter from './components/Todo/TodoFooter.vue'

  export default {
      name:'App',
      components:{
        TodoList,
        TodoHeader,
        TodoFooter
      },
      data(){
        return {
          todos:[
            {title:'eating',complete:false},
            {title:'sleeping',complete:false},
            {title:'cooding',complete:false},
          ]
        }
      },
      methods:{
        addTodo(todo){
          this.todos.unshift(todo);
        },
        deleteTodo(index){
          this.todos.splice(index,1)
        }
      }
  }
</script>
<style>
  
  .todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>