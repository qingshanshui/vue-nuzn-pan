<script setup lang="ts">
import {defineProps} from "vue";
import {FileSelectIcon, saveAs, sizeToStr} from '/@/utils/utils'
import {GetFileDownload} from '/@/api/index'

const handelDownload = (path: string) => {
    GetFileDownload({path}).then(blob => {
        saveAs(blob.data, props.detail.name)
    })
}
const props = defineProps({
    detail: {type: Object}
})

</script>
<template>
    <div class="detail">
        <div class="detail-icon">
            <n-icon :component="FileSelectIcon(props.detail)" size="50" color="rgb(24, 144, 255)"
                    style="margin-right: 5px"/>
        </div>
        <div class="detail-name">
            {{ props.detail.name }}
        </div>
        <div class="detail-info">
            {{ sizeToStr(props.detail.size) }} • {{ props.detail.time }}
        </div>
        <div class="detail-operation">
            <n-button type="primary" style="margin-right: 5px">
                复制链接
            </n-button>
            <n-button type="info" @click="handelDownload(props.detail.path)">
                下载
            </n-button>
        </div>
    </div>
</template>


<style scoped>
.detail {
    text-align: center;
    padding: 30px;
}

.detail > div {
    padding: 5px;
}

.detail-name {
    font-size: 18px;
    font-weight: bold;
}
</style>