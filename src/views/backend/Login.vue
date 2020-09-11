<template>
    <div>
        <form action="" @submit.prevent="submitHandle">
            <table>
            <tr>
                <td>用户名</td>
                <td><input type="text" v-model="username"></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="text" v-model="pwd"></td>
            </tr>
            <tr colspan="2">
                <td><button>登录</button></td>
            </tr>
        </table>
        </form>
    </div>
</template>
<script>
    export default {
        name:"Login",
        data(){
            return {
                username:'',
                pwd:''
            }
        },
        methods:{
            submitHandle(){
                if(this.username=='admin'&&this.pwd=="123"){
                    // redis数据库
                    localStorage.setItem("Auth",new Date().getTime())
                    // 跳回之前访问的页面
                    location.href=this.$route.query.redirect;
                    // this.$router.push(this.$route.query.redirect);
                }
            }
        }
    }
</script>
<style scoped>

</style>