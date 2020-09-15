<template>
    <div>
        <header class="header"><h2>顶部菜单</h2></header>
        <nav class="nav">
            <ul>
                <li><router-link to="/backend/list">用户列表</router-link></li>
                <li><router-link to="/backend/edit">用户修改</router-link></li>
                <li><router-link to="/backend/add">用户添加</router-link></li>
            </ul>
        </nav>
        <section class="sec"><router-view></router-view></section>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .header{
        height:80px;
        line-height:80px;
        text-align:center;
        background-color:rgb(8, 151, 103);
        /* margin-top:-40px; */
    }
    .nav{
        float:left;
        width:246px;
        /* height:500px; */
        height:90vh;
        color:white;
        background-color:#07968f;
    }
    .nav ul{
        margin-top:20px;        
    }
    .nav ul li{
        list-style:none;
        padding:5px 0px;
    }
    .nav ul li a{
        color:white;
    }
    .sec{
        height:90vh;
        background-color:rgb(209, 122, 151);
    }
</style>