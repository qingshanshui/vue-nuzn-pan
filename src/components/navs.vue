<script setup lang="ts">
import {Home} from '@vicons/ionicons5'
import {useRoute} from "vue-router"


// 路由转换成面包屑
function routeToUrl() {
    let routers = useRoute().params.path
    let arr = []
    let str = ""
    for (const routersItem of routers) {
        arr.push({href: routersItem, path: str += "/" + routersItem})
    }
    return arr
}

let routeList = routeToUrl()

console.log(routeToUrl())
</script>

<template>
    <n-breadcrumb class="navs">
        <n-breadcrumb-item href="/">
            <n-icon :component="Home"/>
            北京总行
        </n-breadcrumb-item>
        <n-breadcrumb-item v-for="item in routeList" :href="item.path">
            {{ item.href }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<style scoped>
.navs {
    margin: var(--margin) 0;
}
/deep/ a,a:hover{
    text-decoration: none;
}
</style>
