<template>
    <div>
        <h2>搜索框组件</h2>
        <searcher v-model="searcherTxt" @start-search="startSearch"></searcher>
        {{searcherTxt}}
    </div>
</template>
<script>
    import Searcher from './searcher'
    export default{
        name:'Test',
        components:{
            Searcher
        },
        data:function(){
            return {
                searcherTxt:'xxx'
            }
        } ,
        methods:{
            startSearch:function(txt){
                console.log('开始搜索'+txt);
                alert('搜索的数据为:'+txt);
            }
        }  
    }
</script>
<style>

</style>