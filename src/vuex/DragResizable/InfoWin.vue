<template>
    <div>
        <div>x:{{x}}</div>
        <div>y:{{y}}</div>
        <div>w:{{w}}</div>
        <div>h:{{h}}</div>
        <div>x2:{{x2}}</div>
        <div>y2:{{y2}}</div>
    </div>
</template>
<script>
// mapsate用来简化创建computed属性
import {mapState} from 'vuex'

export default {
    name:'InfoWin',
    computed:{
        x(){
            return this.$store.state.x;
        },
        ...mapState(["y","w","h"])
    },
    x2(){
        return this.$store.getters.x2
    },
    y2(){
        return this.$store.getters.y2
    }
}
</script>
<style scoped>
   
</style>