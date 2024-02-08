<template>
    <svg style="{width,height}">
        <use :xlink:href="prefix+name" fill="red"></use>
    </svg>
</template>

<script setup lang="ts" >

defineProps({
    prefix:{
        type:String,
        default:'#icon-'
    },
    name:String,
    color:String,
    width:String,
    height:String
})

</script>

<style scoped>

</style>