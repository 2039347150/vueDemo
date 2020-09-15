<template>
    <div class="wrap">
        <count-btn class="btn"></count-btn>
        <count-btn class="btn"></count-btn>
        <input class="txt"
               :value="count" @change="changeHandler" type="number" name="" id="">
    </div>
</template>

<script>
    import CountBtn from './CountBtn'
    export default {
        name: "index",
        computed:{
          count:function () {
              return this.$store.state.count;
          }
        },
        methods:{
            changeHandler(){
                this.$store.commit('increment');
            }
        },
        components:{
            CountBtn
        }
    }
</script>

<style scoped>
    .btn,.txt{
        padding: 10px;
        /* font-size: 33px; */
    }
    .wrap{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
    }
</style>