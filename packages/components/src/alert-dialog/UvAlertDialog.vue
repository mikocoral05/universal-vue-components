<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import type { UvAlertDialogActionDetail } from './alert-dialog.types'
interface Props { modelValue?:boolean; title:string; description?:string; confirmLabel?:string; cancelLabel?:string; danger?:boolean; closeOnEscape?:boolean; closeOnBackdrop?:boolean; returnValue?:string }
const props=withDefaults(defineProps<Props>(),{modelValue:false,description:'',confirmLabel:'Confirm',cancelLabel:'Cancel',danger:false,closeOnEscape:true,closeOnBackdrop:false,returnValue:''})
const emit=defineEmits<{ 'update:modelValue':[open:boolean]; confirm:[detail:UvAlertDialogActionDetail]; cancel:[detail:UvAlertDialogActionDetail] }>()
const panel=ref<HTMLElement|null>(null);let previous:HTMLElement|null=null
function focusables(){return [...panel.value?.querySelectorAll<HTMLElement>('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')||[]].filter(el=>!el.hasAttribute('disabled'))}
function close(action:'confirm'|'cancel'){
  const detail: UvAlertDialogActionDetail = { action, returnValue: props.returnValue || undefined }
  if (action === 'confirm') emit('confirm', detail)
  else emit('cancel', detail)
  emit('update:modelValue',false)
}
function key(event:KeyboardEvent){if(event.key==='Escape'&&props.closeOnEscape){event.preventDefault();close('cancel')}else if(event.key==='Tab'){const all=focusables();if(!all.length)return;const first=all[0],last=all[all.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}}
watch(()=>props.modelValue,async open=>{if(open){previous=document.activeElement as HTMLElement;await nextTick();panel.value?.querySelector<HTMLButtonElement>('.uv-alert-dialog__cancel')?.focus()}else previous?.focus()})
onBeforeUnmount(()=>previous?.focus())
</script>
<template><Teleport to="body"><div v-if="modelValue" class="uv-alert-dialog" @keydown="key"><div class="uv-alert-dialog__backdrop" @click="closeOnBackdrop&&close('cancel')"></div><section ref="panel" class="uv-alert-dialog__panel" role="alertdialog" aria-modal="true" :aria-labelledby="`${title}-alert-title`" :aria-describedby="description?`${title}-alert-description`:undefined"><h2 :id="`${title}-alert-title`">{{ title }}</h2><p v-if="description" :id="`${title}-alert-description`">{{ description }}</p><div class="uv-alert-dialog__body"><slot /></div><footer><button type="button" class="uv-alert-dialog__cancel" @click="close('cancel')">{{ cancelLabel }}</button><button type="button" :class="{'uv-alert-dialog__danger':danger}" @click="close('confirm')">{{ confirmLabel }}</button></footer></section></div></Teleport></template>
<style>.uv-alert-dialog{position:fixed;z-index:1000;inset:0;display:grid;place-items:center;padding:1rem;font:inherit}.uv-alert-dialog__backdrop{position:absolute;inset:0;background:#0f172a99}.uv-alert-dialog__panel{position:relative;z-index:1;width:min(100%,30rem);padding:1.25rem;border-radius:var(--uv-radius-lg,.875rem);background:#fff;box-shadow:0 24px 70px #0f172a55;color:#0f172a}.uv-alert-dialog h2,.uv-alert-dialog p{margin-top:0}.uv-alert-dialog footer{display:flex;justify-content:flex-end;gap:.65rem;margin-top:1.2rem}.uv-alert-dialog button{border:1px solid #cbd5e1;border-radius:.5rem;padding:.65rem .9rem;background:#fff;font:600 .9rem/1 system-ui;cursor:pointer}.uv-alert-dialog footer button:last-child{border-color:var(--uv-color-primary,#2563eb);background:var(--uv-color-primary,#2563eb);color:#fff}.uv-alert-dialog footer .uv-alert-dialog__danger{border-color:#dc2626;background:#dc2626}</style>
