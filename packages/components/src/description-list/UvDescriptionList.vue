<script setup lang="ts">
import { computed } from 'vue'
import type { UvDescriptionListItem } from './description-list.types'
interface Props { items?:UvDescriptionListItem[]; itemsJson?:string; layout?:'stacked'|'horizontal'; bordered?:boolean; striped?:boolean; label?:string }
const props=withDefaults(defineProps<Props>(),{items:()=>[],itemsJson:'',layout:'stacked',bordered:false,striped:false,label:''})
function parse(){try{const v=JSON.parse(props.itemsJson);return Array.isArray(v)?v:[]}catch{return[]}}
const list=computed<UvDescriptionListItem[]>(()=> (props.items.length?props.items:parse()).filter(item=>!item.hidden))
</script>
<template><section class="uv-description-list" :class="[`uv-description-list--${layout}`,{'uv-description-list--bordered':bordered,'uv-description-list--striped':striped}]" :aria-label="label||undefined"><dl><div v-for="(item,index) in list" :key="item.id??index"><dt><slot name="term" :item="item" :index="index">{{ item.term }}</slot></dt><dd><slot name="description" :item="item" :index="index">{{ item.description }}</slot></dd></div></dl></section></template>
<style>.uv-description-list{font:inherit;color:#0f172a}.uv-description-list dl{display:grid;gap:.75rem;margin:0}.uv-description-list dl>div{display:grid;gap:.25rem}.uv-description-list--horizontal dl>div{grid-template-columns:minmax(8rem,1fr) minmax(0,2fr);gap:1rem}.uv-description-list dt{font-weight:650;color:#334155}.uv-description-list dd{margin:0;color:#64748b}.uv-description-list--bordered dl{gap:0;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);overflow:hidden}.uv-description-list--bordered dl>div{padding:.75rem;border-bottom:1px solid var(--uv-color-border,#cbd5e1)}.uv-description-list--bordered dl>div:last-child{border-bottom:0}.uv-description-list--striped dl>div:nth-child(even){background:#f8fafc}@media(max-width:36rem){.uv-description-list--horizontal dl>div{grid-template-columns:1fr}}</style>
