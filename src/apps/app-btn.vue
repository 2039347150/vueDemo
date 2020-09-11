<template>
  <div id="app" class="todo-container">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 命令行自动生成的helloworld组件 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <count-btn>点击</count-btn>
    <h2>搜索</h2>
    <searcher></searcher>
    <test></test>
    <star></star>    
    <h2>弹窗确认</h2>
    <pop-confirm></pop-confirm>
    <h2>tab组件化</h2>
    <tab></tab>
    <h2>列表组件化</h2>
    <todo-list></todo-list>
    <note-list></note-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import countBtn from './components/countBtn/index'
import Searcher from './components/searcher/searcher.vue'
import Test from './components/searcher/test.vue'
import Star from './components/star/star.vue'
import PopConfirm from './components/PopConfirm/PopConfirm.vue'
import Tab from './components/Tabs/Tab.vue'
import TodoList from './components/TodoList/TodoList.vue'

import NoteList from './components/Note/NoteList.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    countBtn,
    Searcher,
    Test,
    Star,
    PopConfirm,
    Tab,
    TodoList,
    NoteList,
  },
  methods:{
  
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
