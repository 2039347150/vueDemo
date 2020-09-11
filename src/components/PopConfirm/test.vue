<template>
    <div>
        <pop-confirm msg="确认要修改吗"><a href="">修改</a></pop-confirm>
        <pop-confirm msg="确认要删除吗"><button>删除</button></pop-confirm>
        <pop-confirm msg="你真的要和我分手吗？"><span>分手</span></pop-confirm>
    </div>
</template>
<script>
    import PopConfirm from './PopConfirm.vue'
    export default{
        name:'Test',
        components:{
            PopConfirm
        }
    }
</script>
<style scoped>

</style>