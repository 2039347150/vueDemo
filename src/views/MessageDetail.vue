<template>
    <div>
        <p>ID:{{$route.params.id}}</p>
        <ul>
            <li>id:{{messageDetail.id}}</li>
            <li>title:{{messageDetail.title}}</li>
            <li>content:{{messageDetail.content}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'MessageDetail',
        data(){
            return {
                messageDetail:{}
            }
        },
        mounted(){
            setTimeout(()=>{
                const allMessageDetails=[
                    {id:1,title:'message001',content:'message001 content...'},
                    {id:2,title:'message002',content:'message002 content...'},
                    {id:3,title:'message003',content:'message003 content...'}
                ]
                this.messageDetail=allMessageDetails
                const id=this.$route.params.id*1
                this.messageDetail=allMessageDetails.find(detail=>detail.id===id)
            },1000)
        },
        watch:{
            $route:function(value){
                const id=value.params.id*1
                this.messageDetail=this.allMessageDetails.find(detail=>detail.id===id)
            }
        }
    }
</script>
<style scoped>

</style>