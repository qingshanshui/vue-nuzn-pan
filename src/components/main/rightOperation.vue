<script setup lang="ts">
import {defineProps,onBeforeUnmount} from "vue";
import {GetFileDownload} from "/@/api";
import {saveAs} from "/@/utils/utils";
import bus from "/@/utils/bus"
import { useMessage } from 'naive-ui'
const message = useMessage()
const props = defineProps({
    detail: {type: Object}
})
import useClipboard from 'vue-clipboard3'

const {toClipboard} = useClipboard()
const copy = async (path: string) => {
    try {
        await toClipboard(`${location.origin}/v1/download?path=${path}`)
        message.success('复制成功')
    } catch (e) {
        message.warning(e)
    }
}
const handelDownload = (path: string) => {
    bus.emit('stateLoading', true)
    GetFileDownload({path}).then(blob => {
        saveAs(blob.data, props.detail.name)
        bus.emit('stateLoading', false)
        message.success('下载成功')
    })
}
onBeforeUnmount(()=>{
    bus.off('stateLoading')
})
</script>
<template>
    <div class="rightOperation">
        <div class=".col-xs-12" style="margin-bottom: 10px">
            <n-button type="primary" @click="copy(props.detail.path)">
                <!--                <template #icon>-->
                <!--                    <n-icon :component="Folder" size="25" color="rgb(24, 144, 255)"/>-->
                <!--                </template>-->
                复制链接
            </n-button>
        </div>
        <div class=".col-xs-12">
            <n-button type="info" @click="handelDownload(props.detail.path)">
                <!--                    <template #icon>-->
                <!--                        <n-icon :component="AlertCircleSharp" size="25" color="rgb(24, 144, 255)"/>-->
                <!--                    </template>-->
                下载
            </n-button>
        </div>
    </div>
</template>


<style scoped>
.rightOperation {
    position: fixed;
    font-size: 20px;
    display: none;
    background-color: #ffffff;
    padding: 20px;
    z-index: 999;
    box-shadow: 0 10px 30px -5px rgb(0 0 0 / 30%);
    border-radius: 6px;
}
</style>