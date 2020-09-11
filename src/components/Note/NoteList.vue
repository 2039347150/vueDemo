<template>
    <div class="wrap">
        <h1>记事本</h1>       
        <div class="btn-toolbar" role="toolbar" aria-label="...">
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default" @click="addNote">新建</button>
                <button type="button" class="btn btn-default" @click="saveNote">保存</button>
                <button type="button" class="btn btn-default" @click="recoverNote">恢复</button>
                <button type="button" class="btn btn-default" @click="delNote">删除</button>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">存档<span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <note-item v-for="(note,index) in notes" :key="index" :note="note" @operate="showList"></note-item>
                    </ul>
                </div>
            </div>           
        </div>
        <div>
            <p>标题：</p>
            <p><input type="hidden" v-model="id"></p>
            <p><input type="text" placeholder="请输入标题" v-model="title"></p>
            <p>内容：</p>
            <p><textarea name="" id="" cols="40" rows="10" v-model="content"></textarea></p>
        </div>
    </div>
</template>
<script>
    import NoteItem from './NoteItem.vue'
    var noteNum=4;
    export default {
        name:'NoteList',
        components:{
            NoteItem
        },
        data:function(){
            return {
                notes:[
                    {id:1,title:'Hello Vue',content:'你好吗'},
                    {id:2,title:'Hello HTML',content:'你好啊'},
                    {id:3,title:'Hello CSS',content:'你好呀'},
                    {id:4,title:'Hello JS',content:'你好哦'}
                ],
                title:'',
                content:'',
                id:'',
                t2:'',
                c2:''
            }
        },
        methods:{
            addNote(){
                this.notes.push({
                    id:noteNum++,
                    title:this.title,
                    content:this.content
                })
                alert('添加成功')
                // 新建笔记后，将内容和标题清空
                this.title='';
                this.content=''
                
            },
            saveNote(){
                console.log(this.id);
                if(this.id){
                    this.notes.splice(this.id-1,1,{id:this.id,title:this.title,content:this.content});
                }
            },
            recoverNote(){
                this.title=this.t2;
                this.content=this.c2
                 this.notes.push({
                    // id:noteNum++,
                    id:this.id,
                    title:this.t2,
                    content:this.c2
                })
                // alert('修复成功')                
            },
            delNote(){
                var msg=confirm("确认删除吗？");
                if(msg==true){
                    if(this.id){
                        this.notes.splice(this.id-1,1);
                        this.t2=this.title;
                        this.c2=this.content;
                        this.title='';
                        this.content='';
                    }
                    alert('删除成功')
                    console.log('t2'+this.t2,'c2'+this.c2)
                }
            },
            showList(value){
                this.title=value.title;
                this.content=value.content;
                this.id=value.id
                console.log(value.id);
            }
        }
    }
</script>
<style scoped>
    .wrap{
        width:400px;
        cursor:pointer;
        margin:0 auto;
    }
    .btn-toolbar{
        margin-bottom:10px;
    }
    button{
        border:1px solid gray;
    }
    input,textarea{
        width:77%;
        /* border-radius:3px; */
        resize:none;
    }
  
</style>