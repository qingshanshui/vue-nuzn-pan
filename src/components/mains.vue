<script setup lang="ts">
import {reactive, onMounted, watch} from "vue"
import NotFound from "./main/notFound.vue"
import List from "./main/list.vue"
import Details from "./main/details.vue"
import {GetList, GetFile} from "/@/api/index"
import {useRoute} from 'vue-router'

let route = useRoute()

watch(route, () => {
    // initStateList()
    initStateFile()
})
let state = reactive({
    list: [] as any[],
    show: false,
    DirOrDetail: true, // true是详情  false是文件夹
})

onMounted(() => {
    // initStateList()
    initStateFile()
})

const initStateFile = async () => {
    state.show = true
    let res = await GetFile({path: route.path === "/" ? "" : route.path})
    if (Array.isArray(res?.data?.data)) {
        if (res?.data?.data[0].isDir) {
            await initStateList()
        } else {
            state.DirOrDetail = true
            state.list = res?.data?.data
        }
    } else {
        state.list = []
    }
    state.show = false
}

const initStateList = async () => {
    state.show = true
    let res = await GetList({path: route.path === "/" ? "" : route.path})
    state.show = false
    state.DirOrDetail = false
    state.list = res?.data?.data || []
}
</script>

<template>
    <div class="mains">
        <n-space vertical>
            <n-spin :show="state.show">
                <NotFound v-if="state.list.length === 0"/>
                <template v-else>
                    <template v-if="state.DirOrDetail">
                        <!--                    详情-->
                        <Details :detail="state.list[0]"/>
                    </template>
                    <template v-else>
                        <!--                    列表-->
                        <List :list="state.list"/>
                    </template>
                </template>
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
