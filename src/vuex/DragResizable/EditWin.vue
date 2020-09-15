<template>
   <div>
        <div>
            <label>x:<input :value="x" @change="changeX" type="number"></label>
            <label>y:<input :value="y" @change="changeY" type="number"></label>
        </div>
        <div>
            <label>w:<input :value="w" @change="changeW" type="number"></label>
            <label>h:<input :value="h" @change="changeH" type="number"></label>
        </div>
   </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'EditWin',
    computed:mapState(["x","y","w","h"]),
    methods:{
        changeX(e){
            this.$store.commit("changeX",parseFloat(e.target.value))
        },
        changeY(e){
            this.$store.commit("changeY",parseFloat(e.target.value))
        },
        changeW(e){
            this.$store.commit("changeW",parseFloat(e.target.value))
        },
        changeH(e){
            this.$store.commit("changeH",parseFloat(e.target.value))
        },
    }
}
</script>
<style scoped>
   
</style>