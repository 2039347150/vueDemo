<template>
    <div>
        <h2>五星好评组件</h2>
        <!-- <img src="./img/star48_on.png" alt="offstar" v-show="num>=1">
        <img src="./img/star48_on.png" alt="offstar" v-show="num>=2">
        <img src="./img/star48_on.png" alt="offstar" v-show="num>=3">
        <img src="./img/star48_on.png" alt="offstar" v-show="num>=4">
        <img src="./img/star48_on.png" alt="offstar" v-show="num>=5"> -->
        <!-- <p><input type="number" value="" v-model="num" min="0" max="5" step="1"></p> -->

        <!-- <span class="on"></span>
        <span class="on"></span>
        <span class="on"></span>
        <span class="half"></span>
        <span class="off"></span> -->

        <span v-for="(item,index) in stars" :key="index" :class="item"></span>
        <p><input type="number" value="" v-model="score" min="0" max="5" step="0.5"></p>
    </div>
</template>
<script>
    export default{
        name:'Star',
        // data:function(){
        //     return {
        //         stars:['on','on','on','half','off']
        //     }
        // },         
        props:{
            score:{
                type:Number,
                required:true
            }
        },   
        computed:{
            stars:function(){
                var s=[];
                var sc=parseFloat(this.score);
                for(let i=0;i<=sc;i++){
                    s.push('on');
                }
                console.log('数组的长度为：'+s.length)
                if(sc-s.length>0){
                    s.push('half');
                }
                while(s.length<5){
                    s.push('off');
                }
                return s;
            }
        }    
    }
</script>
<style scoped>
    .on,.off,.half{
        display:inline-block;
        width:60px;
        height:60px;
    }
    .on{
        background:url("./img/star48_on.png") no-repeat;
    }
    .off{       
        background:url("./img/star48_off.png") no-repeat;
    }
    .half{
        background:url("./img/star48_half.png") no-repeat;
    }
    img{
        width:25px;
        height:25px;
        margin-right:10px;
    }
</style>