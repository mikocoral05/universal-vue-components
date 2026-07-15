<script setup lang="ts">
import { computed } from 'vue'
import type { UvLinkNavigateDetail } from './link.types'
interface Props { href?:string; target?:string; rel?:string; disabled?:boolean; external?:boolean; download?:string|boolean; underline?:'always'|'hover'|'none'; label?:string }
const props=withDefaults(defineProps<Props>(),{href:'#',target:'',rel:'',disabled:false,external:false,download:false,underline:'hover',label:''})
const emit=defineEmits<{ navigate:[detail:UvLinkNavigateDetail] }>()
const resolvedRel=computed(()=>props.rel||(props.target==='_blank'?'noopener noreferrer':undefined))
function activate(event:MouseEvent){if(props.disabled){event.preventDefault();return}emit('navigate',{href:props.href,external:props.external})}
</script>
<template><a class="uv-link" :class="`uv-link--${underline}`" :href="disabled?undefined:href" :target="target||undefined" :rel="resolvedRel" :download="download===true?'':download||undefined" :aria-disabled="disabled||undefined" :tabindex="disabled?-1:undefined" @click="activate"><slot>{{ label || href }}</slot><span v-if="external" class="uv-link__external" aria-hidden="true">↗</span><span v-if="external" class="uv-link__sr"> (opens in a new context)</span></a></template>
<style>.uv-link{display:inline-flex;gap:.25rem;align-items:center;color:var(--uv-color-primary,#2563eb);font:inherit;text-underline-offset:.2em}.uv-link--hover{text-decoration:none}.uv-link--hover:hover{text-decoration:underline}.uv-link--none{text-decoration:none}.uv-link[aria-disabled=true]{color:#94a3b8;cursor:not-allowed}.uv-link:focus-visible{outline:2px solid color-mix(in srgb,var(--uv-color-primary,#2563eb) 40%,transparent);outline-offset:2px;border-radius:.2rem}.uv-link__external{font-size:.85em}.uv-link__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}</style>
