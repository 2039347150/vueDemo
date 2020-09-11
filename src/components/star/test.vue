<template>
    <div>
        <star :score="3.5"></star>
        <p><input type="number" value="" v-model="score" min="0" max="5" step="0.5"></p>
    </div>
</template>
<script>
import Star from './star.vue'
    export default {
        name:'Test',
        components:{
            Star
        },
        data:function(){
            return {
                score:3.5
            }
        }
    }
</script>