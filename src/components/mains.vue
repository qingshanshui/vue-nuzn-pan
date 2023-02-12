<script setup lang="ts">
import NotFound from "./main/notFound.vue"
import List from  "./main/list.vue"
</script>

<template>
 <div class="mains">
<!--     <NotFound/>-->
     <List :list="[{name:'main.go',size:'436B',time:'2023-01-07 21:07:44'},{name:'jos.rs',size:'46B',time:'2023-01-07 21:07:44'},{name:'main.rs',size:'46B',time:'2023-01-07 21:07:44'}]"/>
 </div>
</template>

<style scoped>
.mains{
    background-color: var(--background-color);
    padding: var(--padding);
    border-radius: var(--border-radius);
}
</style>
