<script setup lang="ts">
import { UvIcon } from '@universal-vue/icons'
const props=withDefaults(defineProps<{code:string;language?:string}>(),{language:'ts'});const copied=ref(false)
async function copy(){await navigator.clipboard.writeText(props.code);copied.value=true;setTimeout(()=>copied.value=false,1400)}
</script>
<template><div class="code-block"><div class="code-toolbar"><span>{{language}}</span><button type="button" @click="copy"><UvIcon name="copy" :size="15"/>{{copied?'Copied':'Copy'}}</button></div><pre><code>{{code}}</code></pre></div></template>
