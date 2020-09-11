<template>
    <div>
        <!-- <div>
            <h2>确认按钮事件</h2>
            <button @click="popConfirm">分手</button>
        </div> -->
        <!-- <div class="pop" v-if="show" :style="{left:x+'px',top:y+'px'}"> -->
        <div class="pop" v-if="show">
            <p class="msg">真要和我分手吗?</p>
            <!-- <p class="msg">{{msg}}</p> -->
            <p class="btn">
                <span>取消</span>
                <button>确认</button>
            </p>
            <span class="caret"></span>
        </div>
        <button @click="show=!show">分手</button>
        <!-- <a @click.prevent="show=!show"><slot><button>分手</button></slot></a> -->
    </div>
</template>
<script>
    export default{
        name:'PopConfirm',
        data:function(){
            return {
                show:false,
                x:0,
                y:0
            }
        },
        mounted(){
            if(this.closeable){
                var vc=this;
                console.log(vc);
                window.addEventListener('click',function(e){
                    console.log(e.path,this);
                    var result=e.path.every((el)=>el.className!='pop');
                    if(result && vc.show){
                        vc.show=false;
                    }
                },true)
            }
        },
        props:{
            msg:String,
            closeable:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            clickHandler:function(mouse){
                // confirm('真要和我分手吗？')
                this.show=!this.show;
                this.x=mouse.pageX;
                this.y=mouse.pageY;
            }
        }
    }
</script>
<style scoped>
    .pop{
        padding:30px 50px;
        /* width:200px; */
        /* height:150px; */
        text-align:center;
        /* border:1px solid black; */
        box-shadow:0px 0px 3px 3px rgb(160, 160, 160);
        position:absolute;
        top:490px;
        border-radius:5px;
    }
    .btn{
        margin-top:20px;
    }
    .btn span{
        padding-right:20px;
        cursor:pointer;
    }
    .caret{
        /* width:100px; */
        /* height:100px; */
        display:inline-block;
        border-left:12px solid transparent;
        border-right:12px solid transparent;
        border-bottom:20px solid white;
        position:absolute;
        top:-18px;
        left:20px;
    }
</style>