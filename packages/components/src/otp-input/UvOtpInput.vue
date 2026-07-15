<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import type { UvOtpDetail, UvOtpInputMode } from './otp-input.types'
interface Props { modelValue?: string; length?: number; label?: string; mode?: UvOtpInputMode; mask?: boolean; disabled?: boolean; required?: boolean; autocomplete?: string; name?: string }
const props=withDefaults(defineProps<Props>(),{modelValue:'',length:6,label:'Verification code',mode:'numeric',mask:false,disabled:false,required:false,autocomplete:'one-time-code',name:''})
const emit=defineEmits<{ 'update:modelValue':[value:string]; change:[detail:UvOtpDetail]; complete:[detail:UvOtpDetail] }>()
const inputs=ref<HTMLInputElement[]>([])
const chars=ref<string[]>([])
const count=computed(()=>Math.max(1,Math.min(12,Math.trunc(props.length))))
function sanitize(value:string){const pattern=props.mode==='numeric'?/[^0-9]/g:/[^A-Za-z0-9]/g;return value.replace(pattern,'').slice(0,count.value)}
function sync(value:string){const clean=sanitize(value);chars.value=Array.from({length:count.value},(_,i)=>clean[i]||'')}
watch([()=>props.modelValue,count],()=>sync(props.modelValue),{immediate:true})
function publish(){const value=chars.value.join('');const detail={value,complete:value.length===count.value};emit('update:modelValue',value);emit('change',detail);if(detail.complete)emit('complete',detail)}
function focusAt(index:number){nextTick(()=>inputs.value[index]?.focus())}
function onInput(index:number,event:Event){const value=sanitize((event.target as HTMLInputElement).value);if(!value)return;value.split('').forEach((char,offset)=>{if(index+offset<count.value)chars.value[index+offset]=char});publish();focusAt(Math.min(index+value.length,count.value-1))}
function onKeydown(index:number,event:KeyboardEvent){if(event.key==='Backspace'){event.preventDefault();if(chars.value[index])chars.value[index]='';else if(index>0){chars.value[index-1]='';focusAt(index-1)}publish()}else if(event.key==='ArrowLeft'&&index>0)focusAt(index-1);else if(event.key==='ArrowRight'&&index<count.value-1)focusAt(index+1)}
function onPaste(event:ClipboardEvent){event.preventDefault();const value=sanitize(event.clipboardData?.getData('text')||'');sync(value);publish();focusAt(Math.min(value.length,count.value-1))}
function setInput(el:unknown,index:number){if(el)inputs.value[index]=el as HTMLInputElement}
</script>
<template>
  <fieldset class="uv-otp-input" :disabled="disabled"><legend>{{ label }}<span v-if="required" aria-hidden="true"> *</span></legend><div class="uv-otp-input__cells" role="group" :aria-label="label"><input v-for="(_,index) in count" :key="index" :ref="el=>setInput(el,index)" :value="chars[index]" :type="mask?'password':'text'" :inputmode="mode==='numeric'?'numeric':'text'" :pattern="mode==='numeric'?'[0-9]*':undefined" maxlength="1" :autocomplete="index===0?autocomplete:'off'" :aria-label="`${label} digit ${index+1} of ${count}`" @input="onInput(index,$event)" @keydown="onKeydown(index,$event)" @paste="onPaste"></div><input v-if="name" type="hidden" :name="name" :value="chars.join('')"></fieldset>
</template>
<style>
.uv-otp-input{display:grid;gap:.5rem;margin:0;padding:0;border:0;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-otp-input legend{font-weight:600;margin-bottom:.45rem}.uv-otp-input__cells{display:flex;gap:.45rem;flex-wrap:wrap}.uv-otp-input__cells input{box-sizing:border-box;width:2.75rem;height:3rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);text-align:center;font:600 1.15rem/1 system-ui}.uv-otp-input__cells input:focus{outline:2px solid color-mix(in srgb,var(--uv-color-primary,#2563eb) 35%,transparent);border-color:var(--uv-color-primary,#2563eb)}
</style>
