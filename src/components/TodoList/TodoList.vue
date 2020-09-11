<template>
    <div>
        <input type="text" placeholder="New Todo" v-model="value"><button @click="addTodo">add</button>
        <div v-if="todos.length==0">请添加任务</div>
        <ul v-else>
            <!-- <todo-item v-for="(todo,index) in todos" :key="index" :todo="todo" @del="todos.splice($event,1)"></todo-item> -->
            <todo-item v-for="(todo,index) in todos" :key="index" :todo="todo" @del="delHandler"></todo-item>
        </ul>
    </div>
</template>
<script>
    import TodoItem from './TodoItem.vue'
    var todoNum=4;
    export default {
        name:'TodoList',
        components:{
            TodoItem,
        },
        data:function(){
            // data中定义的数据需要在页面上显示
            return {
                todos:[
                    {id:0,title:'任务1'},
                    {id:1,title:'任务2'},
                    {id:2,title:'任务3'},
                    {id:3,title:'任务4'},
                ],
                value:'233'
            }
        },        
        methods:{
            addTodo(key){
                if(this.value!=''){
                    this.todos.push(
                        {
                            id:todoNum++,
                            title:this.value
                        }
                    )
                    // 添加后将input内容清空
                    this.value=''
                }
            },
            delHandler(id){
                //filter方法: 根据返回的真假生成新的数组
                this.todos=this.todos.filter((item)=>item.id!=id);   
                console.log(this.todos);
            }
        }
    }
</script>
<style>

</style>