<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { UvToolbarActionDetail, UvToolbarOrientation } from './toolbar.types'
interface Props { label?: string; orientation?: UvToolbarOrientation; loop?: boolean }
const props=withDefaults(defineProps<Props>(),{label:'Toolbar',orientation:'horizontal',loop:true})
const root=ref<HTMLElement|null>(null)
const emit=defineEmits<{ action:[detail:UvToolbarActionDetail] }>()
function controls(){return Array.from(root.value?.querySelectorAll<HTMLElement>('button:not([disabled]),a[href],[role="button"]:not([aria-disabled="true"])')||[])}
async function onKey(e:KeyboardEvent){const items=controls();if(!items.length)return;const current=Math.max(0,items.indexOf(document.activeElement as HTMLElement));const prev=props.orientation==='horizontal'?'ArrowLeft':'ArrowUp';const next=props.orientation==='horizontal'?'ArrowRight':'ArrowDown';let i=current;if(e.key===next)i=current+1;else if(e.key===prev)i=current-1;else if(e.key==='Home')i=0;else if(e.key==='End')i=items.length-1;else return;e.preventDefault();if(props.loop)i=(i+items.length)%items.length;else i=Math.max(0,Math.min(items.length-1,i));await nextTick();items[i]?.focus()}
function onClick(e:MouseEvent){const item=(e.target as Element).closest('button,a,[role="button"]') as HTMLElement|null;if(!item)return;const list=controls(),index=list.indexOf(item);emit('action',{index,label:item.getAttribute('aria-label')||item.textContent?.trim()||''})}
</script>
<template><div ref="root" class="uv-toolbar" :class="`uv-toolbar--${orientation}`" role="toolbar" :aria-label="label" :aria-orientation="orientation" @keydown="onKey" @click="onClick"><slot /></div></template>
<style>.uv-toolbar{display:flex;gap:.45rem;align-items:center;flex-wrap:wrap;padding:.45rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff);font:inherit}.uv-toolbar--vertical{display:inline-flex;flex-direction:column;align-items:stretch}.uv-toolbar :is(button,a,[role=button]):focus-visible{outline:2px solid var(--uv-color-primary,#2563eb);outline-offset:2px}</style>
