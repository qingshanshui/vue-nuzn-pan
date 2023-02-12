<script setup lang="ts">
import {Home} from '@vicons/ionicons5'
import {useRoute, useRouter} from "vue-router"
import {watch, reactive, onBeforeMount} from "vue"
import {it} from "node:test";

let route = useRoute()
let routes = useRouter()
watch(route, () => {
    routeToUrl()
    console.log(state.routeList)
})

let state = reactive({
    routeList: [] as any[],
})


const handelRoute = (obj: any) => {
    console.log(obj)
    routes.push(obj.path)
}

// 路由转换成面包屑
function routeToUrl() {
    let routers = route.params.path
    let arr = []
    let str = ""
    for (const routersItem of routers) {
        arr.push({href: routersItem, path: str += "/" + routersItem})
    }
    state.routeList = arr
}

routeToUrl()


</script>

<template>
    <n-breadcrumb class="navs">
        <n-breadcrumb-item @click="handelRoute({path:'/'})">
            <n-icon :component="Home"/>
            主页
        </n-breadcrumb-item>
        <n-breadcrumb-item v-for="item in state.routeList" @click="handelRoute(item)">
            {{ item.href }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<style scoped>
.navs {
    margin: var(--margin) 0;
}

/deep/ a, a:hover {
    text-decoration: none;
}
</style>
