<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { UvColorPickerDetail } from './color-picker.types'
interface Props { modelValue?: string; label?: string; swatches?: string[]; swatchesJson?: string; disabled?: boolean; required?: boolean; name?: string }
const props=withDefaults(defineProps<Props>(),{modelValue:'#2563eb',label:'Color',swatches:()=>[],swatchesJson:'',disabled:false,required:false,name:''})
const emit=defineEmits<{ 'update:modelValue':[value:string]; input:[detail:UvColorPickerDetail]; change:[detail:UvColorPickerDetail]; invalid:[detail:UvColorPickerDetail]; swatchSelect:[detail:UvColorPickerDetail] }>()
function parse(json:string){try{const value=JSON.parse(json);return Array.isArray(value)?value.filter(v=>typeof v==='string'):[]}catch{return[]}}
const available=computed(()=>props.swatches.length?props.swatches:parse(props.swatchesJson))
const local=ref(props.modelValue)
watch(()=>props.modelValue,v=>{local.value=v})
const valid=computed(()=>/^#[0-9a-f]{6}$/i.test(local.value))
function set(value:string,commit=false){
  local.value=value
  const detail={value,valid:/^#[0-9a-f]{6}$/i.test(value)}
  if(detail.valid)emit('update:modelValue',value)
  if(commit)emit('change',detail)
  else emit('input',detail)
  if(commit&&!detail.valid)emit('invalid',detail)
}
function pick(value:string){set(value,true);emit('swatchSelect',{value,valid:true})}
</script>
<template>
  <div class="uv-color-picker"><label><span class="uv-color-picker__label">{{ label }}<span v-if="required" aria-hidden="true"> *</span></span><span class="uv-color-picker__control"><input class="uv-color-picker__native" type="color" :value="valid?local:'#000000'" :disabled="disabled" :aria-label="`${label} visual picker`" @input="set(($event.target as HTMLInputElement).value)" @change="set(($event.target as HTMLInputElement).value,true)"><input class="uv-color-picker__text" type="text" :value="local" :disabled="disabled" :required="required" :name="name || undefined" spellcheck="false" :aria-invalid="!valid" @input="set(($event.target as HTMLInputElement).value)" @change="set(($event.target as HTMLInputElement).value,true)"></span></label><div v-if="available.length" class="uv-color-picker__swatches" role="list" :aria-label="`${label} swatches`"><button v-for="color in available" :key="color" type="button" role="listitem" :disabled="disabled" :aria-label="`Select ${color}`" :aria-pressed="local.toLowerCase()===color.toLowerCase()" :style="{backgroundColor:color}" @click="pick(color)"></button></div><span v-if="!valid" class="uv-color-picker__error" role="alert">Enter a six-digit hexadecimal color.</span></div>
</template>
<style>
.uv-color-picker{display:grid;gap:.55rem;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-color-picker label{display:grid;gap:.4rem}.uv-color-picker__label{font-weight:600}.uv-color-picker__control{display:flex;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);overflow:hidden;background:#fff}.uv-color-picker__native{width:3.2rem;min-height:2.8rem;padding:.25rem;border:0;background:transparent}.uv-color-picker__text{flex:1;min-width:0;padding:.7rem;border:0;border-left:1px solid var(--uv-color-border,#cbd5e1);outline:0;font:inherit;text-transform:uppercase}.uv-color-picker__swatches{display:flex;gap:.45rem;flex-wrap:wrap}.uv-color-picker__swatches button{width:2rem;height:2rem;border:2px solid #fff;border-radius:999px;box-shadow:0 0 0 1px #cbd5e1;cursor:pointer}.uv-color-picker__swatches button[aria-pressed=true]{box-shadow:0 0 0 2px var(--uv-color-primary,#2563eb)}.uv-color-picker__error{color:#b91c1c;font-size:.875rem}
</style>
