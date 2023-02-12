<script setup lang="ts">
import Headers from "/@/components/Headers.vue"
import Navs from "../../components/navs.vue"
import Mains from "/@/components/mains.vue";
import {SaveUpload} from  "/@/api/index"
SaveUpload({})
</script>
<template>
    <Headers></Headers>
    <Navs></Navs>
    <Mains></Mains>
</template>


<style scoped>

</style>