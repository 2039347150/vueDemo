<template>
  <div id="app" class="todo-container">
    <div>
      <h2>路由跳转</h2>
      <router-link to="/Home">Home</router-link>
      <!-- 通过path跳转 -->
      <router-link :to="{path:'/Home',query:{id:111,age:18}}">用户详情(通过path跳转)</router-link>
      <!-- 通过name跳转,名字大小写要和index.js里配置的一致 -->
      <router-link :to="{name:'User',query:{id:111,age:20}}">用户详情(通过name跳转)</router-link>
      <button @click="go">GO</button>
      <button @click="back">Back</button>
      <button @click="front">front</button>
      <router-link :to="{name:'User',query:{id:101}}">查看101用户信息</router-link>
      <router-link :to="{name:'Blog'}">博客首页</router-link>
    </div>
    <div>
      <!-- 用来显示路由跳转后要显示的页面内 -->
      <router-view></router-view>
    </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {
  
  },
  methods:{
    go(){
      // 字符串
      // this.$router.push('About');
      // 对象
      // this.$router.push({path:'/User',query:{id:111,age:19}});
      // RESTful
      // this.$router.push({name:'User',params:{id:111,age:18}});
      this.$router.go(-1);//
    },
    back(){
      this.$router.go(-1);
    },
    front(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* color:green; */
    margin-top: 60px;
  }
  .router-link-exact-active,.router-link-active{
    color:red;
  }
</style>
