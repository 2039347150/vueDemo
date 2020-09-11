<template>
<div>
    <div>
        <header class="site-header jumbotron">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h1>请发表对Vue的评论</h1>
              </div>
            </div>
          </div>
      </header>
    </div>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments" :deleteComment="deleteComment"></List>
      <!-- <List :commetns="comments"></List> -->
    </div>
  </div>
</template>
<script>
  import Add from './components/Comment/Add.vue'
  import List from './components/Comment/List.vue'

  export default {
      name:'App',
      components:{
        Add,
        List
      },
      data(){
        return {
          comments:[
              {name:'Bob',content:'Vue还不错'},
              {name:'小红',content:'just so so'},
              {name:'小明',content:'good'}
            ]
        }
      },
      methods:{
        // 添加评论
        addComment(comment){
          this.comments.unshift(comment);
        },
        // 删除指定下标的评论
        deleteComment(index){
          this.comments.splice(index,1);
        }
      }
  }
</script>
<style scoped>

</style>