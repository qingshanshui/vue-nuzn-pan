<script setup lang="ts">
import {reactive, onMounted, watch} from "vue"
import NotFound from "./main/notFound.vue"
import List from "./main/list.vue"
import {SaveUpload} from "/@/api/index"
import {useRoute} from 'vue-router'

let route = useRoute()

watch(route, () => {
    console.log(route)
    initState()
})
let state = reactive({
    list: [] as any[],
})

onMounted(() => {
    initState()
})

const initState = async () => {
    let res = await SaveUpload({path: route.path === "/" ? "" : route.path})
    state.list = res.data.data
}
</script>

<template>
    <div class="mains">
        <!--     <NotFound/>-->
        <List :list="state.list"/>
    </div>
</template>

<style scoped>
.mains {
    background-color: var(--background-color);
    padding: 10px 20px;
    border-radius: var(--border-radius);
}
</style>
