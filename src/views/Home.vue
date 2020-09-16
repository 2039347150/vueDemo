<template>
    <div>
        <h2>Home主页</h2>
        <ul>
            <li>
                <router-link to="/home/news">News</router-link>
                <router-link to="/home/message">Message</router-link>
            </li>
        </ul>
        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Home'
    }
</script>
<style scoped>

</style>