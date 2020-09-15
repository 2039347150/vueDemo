<template>
    <div class="box">
        <button @click="clickHandle">点击了{{count}}次</button>
        <!-- <button @click="count++">点击了{{count}}次</button> -->
        <!-- <input type="text" v-model="count"> -->
    </div>
</template>
<script>
    export default {
        name:'CountBtn',
        data:function(){
            return{
                // count:0
            }
        },
        // methods:{
        //     clickHandle(){
        //         this.count++;
        //     }
        // }
        // 计算属性
        computed:{
            // 从vuex中读取数据，并实现响应式
            count(){
                return this.$store.state.count;
            }
        },
        methods:{
            clickHandle(){
                // 通知vuex改变数据
               this.$store.commit("increment"); 
            }
        }
    }
</script>
<style scoped>
    .box{
        height:100vh;
        width:100vw;
    }
    button{
        display:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
    }
</style>