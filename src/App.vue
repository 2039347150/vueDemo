<template>
  <div id="app" class="todo-container">
    <div>
      <!-- <h2>App2</h2> -->
      <router-view class="left"></router-view>
      <router-view name="all" class="right"></router-view>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
   
  },
  methods:{
    
  }
}
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* color:green; */
    /* margin-top: 60px; */
  }
  .router-link-exact-active,.router-link-active{
    color:red;
  }
</style>
