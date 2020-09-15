<template>
    <div>
        <info-win class="info"></info-win>
        <edit-win class="edit"></edit-win>
        <VueDR :x="sx" :y="sy" :w="sw" :h="sh" @dragging="onDrag" @resing="onResize">
            <img src="../../assets/logo.png" alt="" style="width:100%;height:100%">
        </VueDR>
    </div>
</template>
<script>

import VueDR from 'vue-draggable-resizable'
import InfoWin from './InfoWin'
import EditWin from './EditWin.vue'
import {mapState} from 'vuex'

import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
    name:'index',
    components:{
        VueDR,
        InfoWin,
        EditWin
    },
    computed:mapState({
        sx:"x",
        sy:"y",
        sw:"w",
        sh:"h"
    }),
    methods:{
        onDrag(x,y){
            console.log(x,y);
            this.$store.dispatch("drag",{x,y})
        },
        onResize(x,y,w,h){
            console.log(x,y,w,h);
            this.$store.dispatch("resize",{x,y,w,h})
        }
    }
}
</script>
<style scoped>
     .info{
        position:fixed;
        top:10px;
        left:10px;
    }
    .edit{
        position:fixed;
        right:10px;
        top:10px;
    }
</style>