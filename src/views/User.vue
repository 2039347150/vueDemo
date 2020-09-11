<template>
    <div>
        <!-- <div>User</div> -->
        <h2>用户详情页面</h2>
        <div>姓名：{{user.username}}</div>
        <div>年龄：{{user.age}}</div>
        <div>生日：{{user.birthday}}</div>
        <div>星级：<star :score="user.score"></star></div>
    </div>
</template>

<script>
    import Star from '../components/star/star.vue'
    export default {
        name: "User",
        components:{Star},
        data:function(){
            return {
                user:{
                    username:'',
                    age:0,
                    birthday:'',
                    score:0
                }
            }
        },
        created(){
            console.log('创建了----')
            this.axios.get('http://localhost:3000/User/'+this.$route.query.id).then((res)=>{
                this.user=res.data;
                console.log('请求数据为：',res);
            })
        }
    }
</script>

<style scoped>

</style>