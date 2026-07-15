<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { UvPasswordStrength, UvPasswordStrengthDetail } from './password-input.types'
interface Props { modelValue?: string; label?: string; hint?: string; error?: string; revealable?: boolean; showStrength?: boolean; disabled?: boolean; required?: boolean; autocomplete?: string; name?: string }
const props=withDefaults(defineProps<Props>(),{modelValue:'',label:'Password',hint:'',error:'',revealable:true,showStrength:false,disabled:false,required:false,autocomplete:'current-password',name:''})
const emit=defineEmits<{ 'update:modelValue':[value:string]; change:[detail:UvPasswordStrengthDetail]; visibilityChange:[visible:boolean]; strengthChange:[detail:UvPasswordStrengthDetail] }>()
const visible=ref(false)
const value=ref(props.modelValue)
watch(()=>props.modelValue,v=>{value.value=v})
function scorePassword(input:string){let score=0;if(input.length>=8)score++;if(input.length>=12)score++;if(/[A-Z]/.test(input)&&/[a-z]/.test(input))score++;if(/\d/.test(input)&&/[^A-Za-z0-9]/.test(input))score++;return Math.min(score,4)}
const score=computed(()=>scorePassword(value.value))
const strength=computed<UvPasswordStrength>(()=>!value.value?'empty':(['weak','fair','good','strong'][Math.max(0,score.value-1)]||'weak') as UvPasswordStrength)
const detail=computed(()=>({value:value.value,score:score.value,strength:strength.value}))
function onInput(event:Event){value.value=(event.target as HTMLInputElement).value;emit('update:modelValue',value.value);emit('strengthChange',detail.value)}
function onChange(){emit('change',detail.value)}
function toggle(){visible.value=!visible.value;emit('visibilityChange',visible.value)}
</script>
<template>
  <label class="uv-password-input"><span class="uv-password-input__label">{{ label }}<span v-if="required" aria-hidden="true"> *</span></span><span class="uv-password-input__control"><input :value="value" :type="visible?'text':'password'" :name="name || undefined" :disabled="disabled" :required="required" :autocomplete="autocomplete" :aria-invalid="error?true:undefined" :aria-describedby="showStrength?'uv-password-strength':undefined" @input="onInput" @change="onChange"><button v-if="revealable" type="button" :disabled="disabled" :aria-label="visible?'Hide password':'Show password'" :aria-pressed="visible" @click="toggle">{{ visible?'Hide':'Show' }}</button></span><span v-if="error" role="alert" class="uv-password-input__error">{{ error }}</span><span v-else-if="hint" class="uv-password-input__hint">{{ hint }}</span><span v-if="showStrength" id="uv-password-strength" class="uv-password-input__strength" role="status"><span :data-strength="strength" :style="{ '--uv-password-score': score }" />Strength: {{ strength }}</span></label>
</template>
<style>
.uv-password-input{display:grid;gap:.4rem;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-password-input__label{font-weight:600}.uv-password-input__control{display:flex;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);overflow:hidden;background:#fff}.uv-password-input__control:focus-within{outline:2px solid color-mix(in srgb,var(--uv-color-primary,#2563eb) 35%,transparent)}.uv-password-input input{flex:1;min-width:0;padding:.7rem .8rem;border:0;outline:0;font:inherit}.uv-password-input button{border:0;border-left:1px solid var(--uv-color-border,#cbd5e1);padding:0 .8rem;background:#f8fafc;font:inherit;cursor:pointer}.uv-password-input__hint{color:#64748b}.uv-password-input__error{color:#b91c1c}.uv-password-input__strength{display:grid;grid-template-columns:1fr auto;align-items:center;gap:.6rem;color:#64748b;font-size:.875rem}.uv-password-input__strength>span{height:.35rem;border-radius:999px;background:linear-gradient(90deg,var(--uv-color-primary,#2563eb) calc(var(--uv-password-score)*25%),#e2e8f0 0)}
</style>
