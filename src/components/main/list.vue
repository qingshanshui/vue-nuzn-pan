<script setup lang="ts">
import {defineProps} from "vue"
import {FileSelectIcon} from '/@/utils/utils'
import {useRouter} from "vue-router"

const router = useRouter()
const props = defineProps({
    list: Array
})

const handelDirRoute = (obj: any) => {
    if (!obj.isDir) return false;
    router.push(obj.path)
}


const sizeToStr = (size: number) => {
    let sizeStr = "";
    if (size < 0.1 * 1024) { //如果小于0.1KB转化成B
        sizeStr = size.toFixed(2) + "B";
    } else if (size < 0.1 * 1024 * 1024) {//如果小于0.1MB转化成KB
        sizeStr = (size / 1024).toFixed(2) + "KB";
    } else if (size < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
        sizeStr = (size / (1024 * 1024)).toFixed(2) + "MB";
    } else { //其他转化成GB
        sizeStr = (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    let len = sizeStr.indexOf("\.");
    let dec = sizeStr.substr(len + 1, 2);
    if (dec == "00") {//当小数点后为00时 去掉小数部分
        return sizeStr.substring(0, len) + sizeStr.substr(len + 3, 2);
    }
    return sizeStr;
}
</script>


<template>
    <div class="list">
        <div class="t-list-header">
            <div class="list-item row">
                <div class="col-xs-9 col-sm-6 list-item-name">名称</div>
                <div class="col-xs-3 col-sm-3 list-item-size">大小</div>
                <div class="col-sm-3 list-item-update-time hidden-xs">修改时间</div>
            </div>
        </div>
        <div class="t-list-body">
            <div class="list-item row" v-for="(item) in props.list" @click="handelDirRoute(item)">
                <div class="col-xs-9 col-sm-6 list-item-name">
                    <n-icon :component="FileSelectIcon(item)" size="25" color="rgb(24, 144, 255)"
                            style="margin-right: 5px"/>
                    {{ item.name }}
                </div>
                <div class="col-xs-3 col-sm-3 list-item-size">{{ item.isDir ? '-' : sizeToStr(item.size) }}</div>
                <div class="col-sm-3 list-item-update-time hidden-xs">{{ item.time }}</div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.list {
    padding: 0;
}

.list-item-name {
    overflow: hidden; /*超出的文本隐藏*/
    text-overflow: ellipsis; /*用省略号显示*/
    white-space: nowrap; /*不换行*/
    display: flex;
    align-items: center;
}

.list-item-size {
    text-align: right;
}

.list-item-update-time {
    text-align: right;
}

.t-list-header {
    font-weight: bold;
    font-size: 14px;
    color: #687076
}

.t-list-body {
    margin-top: var(--margin);
}

.t-list-body .list-item {
    padding: 5px 0;
    transition: all 0.3s ease 0s;
    border-radius: var(--border-radius);
    margin-top: 2px;
}

.t-list-body .list-item:hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: rgba(132, 133, 141, 0.18);
}
</style>