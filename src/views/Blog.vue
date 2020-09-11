<template>
    <div>
        <h2>博客首页</h2>
        <div>标题：{{blog.title}}</div>
        <div>内容：{{blog.content}}</div>
        <!-- <div :key="index" v-for="(item,index) in blogs">-->
            <!-- <p :key="index" v-for="(item,index) in blogs">标题：{{item.title}}</p> -->
        <!-- </div> --> 
    </div>
</template>

<script>   
    export default {
        name: "Blog",
        data:function(){            
            return {
               blog:{
                    title:'',
                    content:''
                 },
            }
        },
        created(){
            console.log('创建了----')
            this.axios.get('http://localhost:3000/Blog/'+this.$route.query.id).then((res)=>{
                this.blog=res.data;
                console.log('请求数据为：',res);
            })
        }
    }
</script>

<style scoped>

</style>