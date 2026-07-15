<script setup lang="ts">
import { computed } from 'vue'
import type { UvAspectRatioValue } from './aspect-ratio.types'
interface Props { ratio?:UvAspectRatioValue; maxWidth?:string; objectFit?:'cover'|'contain'|'fill'|'none'|'scale-down'; label?:string }
const props=withDefaults(defineProps<Props>(),{ratio:'16/9',maxWidth:'100%',objectFit:'cover',label:''})
const cssRatio=computed(()=>{if(typeof props.ratio==='number')return String(props.ratio);const [a,b]=String(props.ratio).split('/').map(Number);return a>0&&b>0?`${a} / ${b}`:'16 / 9'})
</script>
<template><div class="uv-aspect-ratio" :style="{aspectRatio:cssRatio,maxWidth,'--uv-object-fit':objectFit}" :role="label?'group':undefined" :aria-label="label||undefined"><slot /></div></template>
<style>.uv-aspect-ratio{position:relative;width:100%;overflow:hidden}.uv-aspect-ratio>:slotted(img),.uv-aspect-ratio>:slotted(video),.uv-aspect-ratio>:slotted(iframe){width:100%;height:100%;object-fit:var(--uv-object-fit,cover)}.uv-aspect-ratio>:slotted(*){box-sizing:border-box}</style>
