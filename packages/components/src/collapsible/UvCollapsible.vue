<script setup lang="ts">
import { computed } from 'vue'
import type { UvCollapsibleDetail } from './collapsible.types'
interface Props { modelValue?:boolean; title?:string; disabled?:boolean; lazy?:boolean; iconPosition?:'start'|'end' }
const props=withDefaults(defineProps<Props>(),{modelValue:false,title:'Details',disabled:false,lazy:false,iconPosition:'end'})
const emit=defineEmits<{ 'update:modelValue':[open:boolean]; change:[detail:UvCollapsibleDetail] }>()
const contentId=`uv-collapsible-${Math.random().toString(36).slice(2)}`
const rendered=computed(()=>!props.lazy||props.modelValue)
function toggle(){if(props.disabled)return;const open=!props.modelValue;emit('update:modelValue',open);emit('change',{open})}
</script>
<template><section class="uv-collapsible"><button type="button" class="uv-collapsible__trigger" :disabled="disabled" :aria-expanded="modelValue" :aria-controls="contentId" @click="toggle"><span v-if="iconPosition==='start'" aria-hidden="true">{{ modelValue?'−':'+' }}</span><slot name="title">{{ title }}</slot><span v-if="iconPosition==='end'" aria-hidden="true">{{ modelValue?'−':'+' }}</span></button><div v-if="rendered" v-show="modelValue" :id="contentId" class="uv-collapsible__content"><slot /></div></section></template>
<style>.uv-collapsible{border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:#fff;font:inherit;color:#0f172a}.uv-collapsible__trigger{display:flex;width:100%;justify-content:space-between;gap:1rem;align-items:center;padding:.8rem 1rem;border:0;background:transparent;text-align:left;font:600 .95rem/1.3 system-ui;cursor:pointer}.uv-collapsible__trigger:focus-visible{outline:2px solid var(--uv-color-primary,#2563eb);outline-offset:-2px}.uv-collapsible__content{padding:0 1rem 1rem;color:#475569}.uv-collapsible__trigger:disabled{opacity:.5;cursor:not-allowed}</style>
