<script setup lang="ts">
import type { UvSkipLinkDetail } from './skip-link.types'
interface Props { href?:string; label?:string; offset?:string }
const props=withDefaults(defineProps<Props>(),{href:'#main-content',label:'Skip to main content',offset:'1rem'})
const emit=defineEmits<{ activate:[detail:UvSkipLinkDetail] }>()
function activate(){emit('activate',{target:props.href})}
</script>
<template><a class="uv-skip-link" :href="href" :style="{'--uv-skip-offset':offset}" @click="activate"><slot>{{ label }}</slot></a></template>
<style>.uv-skip-link{position:fixed;z-index:9999;top:var(--uv-skip-offset,1rem);left:var(--uv-skip-offset,1rem);transform:translateY(-180%);padding:.7rem 1rem;border-radius:var(--uv-radius-md,.625rem);background:#0f172a;color:#fff;font:600 .9rem/1 system-ui;text-decoration:none;transition:transform .15s}.uv-skip-link:focus{transform:translateY(0);outline:3px solid #93c5fd;outline-offset:2px}</style>
