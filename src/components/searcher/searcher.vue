<template>
    <div>
        <!-- <h2>搜索框组件1</h2> -->
        <form @submit.prevent="submitHandler">
            <input type="text" @input="$emit('input',$event.target.value)" ref="myInput" :placeholder="value">
            <button>搜索</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'Searcher',
    props:{
        value:{
            type:String,
            default:'请输入要搜索的内容'
        }
    },methods:{
        submitHandler(){
            console.log(this.$refs.myInput.value);
            this.$emit('start-search',this.$refs.myInput.value);
        }
    }
}
</script>
<style>

</style>