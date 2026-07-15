<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import type { UvHoverCardOpenDetail } from './hover-card.types'
interface Props { modelValue?:boolean; openDelay?:number; closeDelay?:number; placement?:'top'|'bottom'|'left'|'right'; disabled?:boolean; label?:string }
const props=withDefaults(defineProps<Props>(),{modelValue:false,openDelay:300,closeDelay:150,placement:'bottom',disabled:false,label:'More information'})
const emit=defineEmits<{ 'update:modelValue':[open:boolean]; openChange:[detail:UvHoverCardOpenDetail] }>()
let timer:ReturnType<typeof setTimeout>|undefined;const inside=ref(false)
function set(open:boolean,reason:UvHoverCardOpenDetail['reason']){if(props.disabled)return;if(timer)clearTimeout(timer);timer=setTimeout(()=>{emit('update:modelValue',open);emit('openChange',{open,reason})},open?props.openDelay:props.closeDelay)}
function enter(reason:'pointer'|'focus'){inside.value=true;set(true,reason)}
function leave(reason:'pointer'|'focus'){inside.value=false;set(false,reason)}
watch(()=>props.modelValue,()=>{if(timer)clearTimeout(timer)})
onBeforeUnmount(()=>{if(timer)clearTimeout(timer)})
</script>
<template><span class="uv-hover-card" @mouseenter="enter('pointer')" @mouseleave="leave('pointer')" @focusin="enter('focus')" @focusout="leave('focus')"><span class="uv-hover-card__trigger" :aria-describedby="modelValue?'uv-hover-card-content':undefined"><slot name="trigger"><button type="button">{{ label }}</button></slot></span><span v-if="modelValue" id="uv-hover-card-content" class="uv-hover-card__content" :class="`uv-hover-card__content--${placement}`" role="tooltip"><slot /></span></span></template>
<style>.uv-hover-card{position:relative;display:inline-block;font:inherit}.uv-hover-card__content{position:absolute;z-index:40;width:max-content;max-width:min(20rem,80vw);padding:.8rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.65rem;background:#fff;box-shadow:0 14px 38px #0f172a22;color:#0f172a}.uv-hover-card__content--bottom{top:calc(100% + .45rem);left:50%;transform:translateX(-50%)}.uv-hover-card__content--top{bottom:calc(100% + .45rem);left:50%;transform:translateX(-50%)}.uv-hover-card__content--left{right:calc(100% + .45rem);top:50%;transform:translateY(-50%)}.uv-hover-card__content--right{left:calc(100% + .45rem);top:50%;transform:translateY(-50%)}</style>
