<template>
    <div class="wrap">
        <div>
            <h2>点击次数统计按钮</h2>
            <CountBtn></CountBtn>
        </div>
        <div>
            <h2>五星好评</h2>
            <Star :score="parseFloat(score)"></Star>
            <input type="number" min="0" max="5" step="0.5" v-model="score">
        </div>
        <div>
            <h2>搜索框</h2>
            <Searcher @start-search="alert('开始搜索'+$event)"></Searcher>
        </div>
        <div>
            <h2>弹出确认窗口</h2>
            <pop-confirm msg="真的要和我分手吗？" @ok="alert('太好了')" @cancel="alert('5555')" closeable><button>分手</button></pop-confirm>
            <pop-confirm msg="做我女朋友好吗？"><a href="">牵手</a></pop-confirm>
            {{txt}}
        </div>
    </div>
</template>
<script>
    import countBtn from './countBtn/index.vue'
    import Star from './star/star.vue'
    import Searcher from './searcher/searcher.vue'
    import PopConfirm from './PopConfirm/PopConfirm.vue'

    export default {
        name:'Test',
        components:{
            countBtn,
            Star,
            Searcher,
            PopConfirm
        },
        data:function(){
            return {
                score:0,
                txt:'初始内容'
            }
        },
        methods:{
            alert(msg){
                console.log(msg);
                window.alert(msg);
            }
        }
    }
</script>
<style scoped>
    .wrap{
        margin:20px;
    }
</style>