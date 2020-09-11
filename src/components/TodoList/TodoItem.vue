<template>
    <div>
       <ul>
           <li>{{todo.title}}<button @click="$emit('del',todo.id)">删除</button></li>
       </ul>
    </div>
</template>
<script>
    export default {
        name:"TodoItem",       
        props:{
            todo:{
                type:Object,
                required:true
            }
        }       
    }
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
</style>