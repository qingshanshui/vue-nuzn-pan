<script setup lang="ts">
import {reactive, onMounted, watch} from "vue"
import NotFound from "./main/notFound.vue"
import List from "./main/list.vue"
import {GetList} from "/@/api/index"
import {useRoute} from 'vue-router'

let route = useRoute()

watch(route, () => {
    initState()
})
let state = reactive({
    list: [] as any[],
    show: false
})

onMounted(() => {
    initState()
})

const initState = async () => {
    state.show = true
    let res = await GetList({path: route.path === "/" ? "" : route.path})
    state.show = false
    state.list = res?.data?.data || []
}
</script>

<template>
    <div class="mains">
        <n-space vertical>
            <n-spin :show="state.show">
                <NotFound v-if="state.list.length === 0"/>
                <List v-else :list="state.list"/>
            </n-spin>
        </n-space>
    </div>
</template>

<style scoped>
.mains {
    background-color: var(--background-color);
    padding: 10px 20px;
    border-radius: var(--border-radius);
}
</style>
