<template>
    <div>
        <ul>          
            <!-- @click点击时将当前按钮的id传给父组件 -->
            <li :class="{active:id==value}" @click="$emit('input',id)">{{label}}</li>            
            <!-- <li :key="i" v-for="(item,i) in tabs" :class="{active:selected}" @click="selected=!selected">{{item}}</li>             -->
        </ul>
    </div>
</template>
<script>
    export default {
        name:'TabBtn',
        data:function(){
            return {
                // tabs:['tab1','tab2','tab3'],
                selected:false
            }
        },
        props:{
            label:{
                type:String,
                default:'tab'
            },
            value:Number,//当前选中的按钮
            id:Number //按钮的编号
        },

        methods:{
          
        }
    }
</script>
<style scoped>
    li {
        display: inline-block;
        border: 1px solid purple;
        background-color: green;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        line-height: 30px;
        border-bottom: none;
        text-align: center;
        font-size: 14px;
        color:white;
        cursor:pointer;
    }
    .active{
        background-color:palegreen;
    }
</style>