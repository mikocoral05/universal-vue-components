<script setup lang="ts">
import type { UvScrollAreaDetail } from './scroll-area.types'
interface Props { label?:string; maxHeight?:string; maxWidth?:string; orientation?:'vertical'|'horizontal'|'both'; tabindex?:number; shadow?:boolean }
const props=withDefaults(defineProps<Props>(),{label:'Scrollable content',maxHeight:'18rem',maxWidth:'100%',orientation:'vertical',tabindex:0,shadow:false})
const emit=defineEmits<{ scroll:[detail:UvScrollAreaDetail]; reachStart:[detail:UvScrollAreaDetail]; reachEnd:[detail:UvScrollAreaDetail] }>()
function onScroll(event:Event){const el=event.currentTarget as HTMLElement;const vertical=props.orientation!=='horizontal';const current=vertical?el.scrollTop:el.scrollLeft;const max=vertical?el.scrollHeight-el.clientHeight:el.scrollWidth-el.clientWidth;const detail={scrollTop:el.scrollTop,scrollLeft:el.scrollLeft,atStart:current<=0,atEnd:current>=max-1};emit('scroll',detail);if(detail.atStart)emit('reachStart',detail);if(detail.atEnd)emit('reachEnd',detail)}
</script>
<template><div class="uv-scroll-area" :class="[`uv-scroll-area--${orientation}`,{'uv-scroll-area--shadow':shadow}]" role="region" :aria-label="label" :tabindex="tabindex" :style="{maxHeight,maxWidth}" @scroll.passive="onScroll"><slot /></div></template>
<style>.uv-scroll-area{box-sizing:border-box;overflow:auto;overscroll-behavior:contain;scrollbar-gutter:stable;font:inherit}.uv-scroll-area--vertical{overflow-x:hidden}.uv-scroll-area--horizontal{overflow-y:hidden;white-space:nowrap}.uv-scroll-area--shadow{mask-image:linear-gradient(to bottom,transparent 0,#000 1rem,#000 calc(100% - 1rem),transparent 100%)}.uv-scroll-area:focus-visible{outline:2px solid var(--uv-color-primary,#2563eb);outline-offset:2px}</style>
