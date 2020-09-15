<template>
   <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"></TodoHeader>
        <!-- <TodoList @addTodo="addTodo"></TodoList>给TODOHeader标签对象绑定addTodo事件监听 -->
        <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
        <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
      </div>
    </div>
</template>
<script>
  import TodoList from   './components/Todo/TodoList.vue'
  import TodoHeader from './components/Todo/TodoHeader.vue'
  import TodoFooter from './components/Todo/TodoFooter.vue'
  import storageUtil from './util/storageUtil'

  export default {
      name:'App',
      components:{
        TodoList,
        TodoHeader,
        TodoFooter,
        storageUtil
      },
      data(){
        return {
          // todos:[
          //   {title:'eating',complete:false},
          //   {title:'sleeping',complete:false},
          //   {title:'cooding',complete:false},
          // ]
          todos:JSON.parse(window.localStorage.getItem('todos_key')||'[]')
          // todos:storageUtil.readTodos()
        }
      },
      methods:{
        addTodo(todo){
          console.log('todo的内容为',todo)
          this.todos.unshift(todo);
        },
        deleteTodo(index){
          this.todos.splice(index,1)
        },
        deleteCompleteTodos(){
          this.todos.filter(todo=>!todo.complete)
        },
        selectAllTodos(isSelectAll){
          // this.todos=[];
          // this.todos.checked=true
          // console.log('todos:',this.todos);
          // for(let i=0;i<this.todos.length;i++){
          //   this.todos[i].complete=true;
          // }
          this.todos.forEach(todo => {
            todo.complete = isSelectAll
        })
        }
      },
      watch:{
        // 深度监视
        todos:{
          deep:true,
          // handler:function(value){
          //   // 将todos最新的值保存到localstorage中
            // window.localStorage.setItem('todos_key',JSON.stringify(value))
          // }
          handler:storageUtil.saveTodos
          // 等价于handler:function(todos){
            // window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
          // }
        }
      }
  }
</script>
<style scoped>
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