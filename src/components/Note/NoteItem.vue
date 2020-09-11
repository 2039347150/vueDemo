<template>
    <div>
        <ul>
            <li @click="$emit('operate',note)">{{note.id+'.'+note.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'NoteItem',
        props:{
            note:{
                type:Object,
                required:true
            }
        }
    }
</script>
<style scoped>
    li{
        list-style:none;
        margin-left:-20px;
    }
</style>