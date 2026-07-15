<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import type { UvSearchDetail } from './search-input.types'
interface Props { modelValue?: string; label?: string; placeholder?: string; debounce?: number; clearable?: boolean; loading?: boolean; disabled?: boolean; name?: string }
const props = withDefaults(defineProps<Props>(), { modelValue: '', label: 'Search', placeholder: 'Search', debounce: 0, clearable: true, loading: false, disabled: false, name: '' })
const emit = defineEmits<{ 'update:modelValue':[value:string]; search:[detail:UvSearchDetail]; submit:[detail:UvSearchDetail]; clear:[detail:UvSearchDetail] }>()
const local = ref(props.modelValue)
let timer: ReturnType<typeof setTimeout> | undefined
watch(() => props.modelValue, value => { local.value = value })
function schedule(value:string){
  local.value=value; emit('update:modelValue',value)
  if(timer) clearTimeout(timer)
  if(props.debounce>0) timer=setTimeout(()=>emit('search',{query:value}),props.debounce)
  else emit('search',{query:value})
}
function onInput(event:Event){ schedule((event.target as HTMLInputElement).value) }
function onSubmit(){ if(timer) clearTimeout(timer); emit('submit',{query:local.value}); emit('search',{query:local.value}) }
function clear(){ schedule(''); emit('clear',{query:''}) }
onBeforeUnmount(()=>{ if(timer) clearTimeout(timer) })
</script>
<template>
  <form class="uv-search-input" role="search" @submit.prevent="onSubmit">
    <label class="uv-search-input__label"><span>{{ label }}</span><span class="uv-search-input__control"><span aria-hidden="true">⌕</span><input :value="local" type="search" :name="name || undefined" :placeholder="placeholder" :disabled="disabled" :aria-busy="loading || undefined" @input="onInput"><button v-if="clearable && local" type="button" class="uv-search-input__clear" :disabled="disabled" aria-label="Clear search" @click="clear">×</button><span v-if="loading" class="uv-search-input__loading" role="status" aria-label="Searching">◌</span></span></label>
  </form>
</template>
<style>
.uv-search-input{display:block;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-search-input__label{display:grid;gap:.4rem;font-weight:600}.uv-search-input__control{display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;gap:.45rem;padding:0 .7rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff)}.uv-search-input__control:focus-within{outline:2px solid color-mix(in srgb,var(--uv-color-primary,#2563eb) 35%,transparent);border-color:var(--uv-color-primary,#2563eb)}.uv-search-input input{min-width:0;padding:.7rem 0;border:0;outline:0;background:transparent;font:inherit;color:inherit}.uv-search-input input::-webkit-search-cancel-button{display:none}.uv-search-input__clear{border:0;background:transparent;font-size:1.2rem;cursor:pointer}.uv-search-input__loading{font-weight:400}
</style>
