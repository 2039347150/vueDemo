<template>
    <div>
        <div>张三的余额:{{zs.money}}</div>
        <div>李四的余额:{{ls.money}}</div>
        <input type="number" value="100" v-model="money">
        <button @click="transferHandle">转账</button>
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState}=createNamespacedHelpers("bank");
export default {
    name:"index",
    data(){
        return {
            money:100
        }
    },
    computed:mapState([
        "zs","ls"
    ]),
    methods:{
        transferHandle(){
            this.$store.commit("bank/transfer",{from:"zs",to:"ls",money:parseFloat(this.money)});
        }
    }
}
</script>
<style scoped>

</style>