<template>
    <div>
        <p>用户列表页面</p>
        <table class='table table-info text-center table-bordered'>
            <tr class="table-danger">
                <th>编号</th>
                <th>用户名</th>
                <th>密码</th>
                <th>性别</th>
            </tr>
            <tr v-for="(user,index) in users" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.pwd}}</td>
                <td>{{user.sex}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'UserList',
    data(){
        return {
            users:[
                {id:1,username:'zs',pwd:123,sex:'男'},
                {id:2,username:'ls',pwd:125,sex:'男'},
                {id:3,username:'ww',pwd:124,sex:'男'},
            ]
        }
    }
}
</script>
<style scoped>
    table{
        width:80%;
    }
    p{
        text-align:center;
    }
</style>
