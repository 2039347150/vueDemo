<template>
    <div>
        <h2>点击按钮</h2>
        <button @click="count++">点击了{{count}}</button>    
    </div>    
</template>
<script>
    export default{
        name:'countBtn',
        // components:{
            
        // },
        data:function(){
            return {
                count:0
            }
        }
    }
</script>
<style>

</style>