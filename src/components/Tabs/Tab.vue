<template>
    <div>
        <!-- <tab-btn label="按钮1"></tab-btn> -->
        <!-- <tab-btn label="按钮2"></tab-btn> -->
        <!-- <tab-btn label="按钮3"></tab-btn> -->
        <tab-btn v-for="(item,index) in tabs" :label="item" :id="index" :key="index" v-model="currentBtn"></tab-btn>
    </div>
</template>
<script>
    import TabBtn from './TabBtn.vue'
    export default {
        name:"Tab",
        components:{
            TabBtn
        },
        data:function(){
            return {
                // tabs:['按钮1','按钮2','按钮3'],
                currentBtn:0
            }
        },
        props:{
            tabs:{
                type:Array,
                default:function(){
                    return ['按钮1','按钮2','按钮3']
                }
            }
        },
        watch:{
            currentBtn:function(val,old){
                console.log('当前值为:'+val,'原来值为:'+old);//可以根据不同id实现联动
                if(val!=old){
                    this.$emit('tab-change',val);
                }
            }
        }
    }
</script>
<style scoped>
    div{
        display:inline-block;
        /* margin-right:-45px; */
    }
</style>