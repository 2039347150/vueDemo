<template>
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
        <label>
            <input type="checkbox" v-model="todo.complete" />
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteItem" v-show="isShow">删除</button>
    </li> 
</template>
<script>
export default {
    name:'TodoItem',
    props:{
        todo:Object,
        index:Number,
        deleteTodo:Function
    },
    data(){
        return{
            bgColor:'white',
            isShow:false
        }
    },
    methods:{
        handleEnter(isEnter){
            if(isEnter){
                this.bgColor='#aaa';
                this.isShow=true;
            }else{
                this.bgColor='white';
                this.isShow=false;
            }
        },
        deleteItem(){
            const {todo,index,deleteTodo}=this
            console.log('this的内容为：',this)
            if(window.confirm(`确认删除${todo.title}吗?`)){
                deleteTodo(index)
            }
        }
    }
}
</script>
<style>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    /* display: none; */
    background-color:orangered;
    border:none;
    padding:5px 8px;
    color:white;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

</style>