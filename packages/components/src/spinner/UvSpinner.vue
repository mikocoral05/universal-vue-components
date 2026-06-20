<script setup lang="ts">
interface Props { size?: string|number; label?: string; thickness?: number }
withDefaults(defineProps<Props>(),{size:24,label:'Loading',thickness:3})
</script>
<template><span class="uv-spinner" role="status" :style="{width:typeof size==='number'?`${size}px`:size,height:typeof size==='number'?`${size}px`:size,borderWidth:`${thickness}px`}"><span class="uv-sr-only">{{ label }}</span></span></template>
<style>
.uv-spinner{display:inline-block;flex:none;border-style:solid;border-color:currentColor;border-right-color:transparent;border-radius:50%;animation:uv-spin .7s linear infinite}@keyframes uv-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.uv-spinner{animation-duration:1.5s}}
.uv-sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
</style>
