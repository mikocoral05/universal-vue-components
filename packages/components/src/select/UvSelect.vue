<script setup lang="ts">
import { computed, useId } from 'vue'
import type { UvSelectOption } from './select.types'
interface Props { modelValue?:string|number; options?:UvSelectOption[]; id?:string; name?:string; label?:string; hint?:string; error?:string; placeholder?:string; disabled?:boolean; required?:boolean }
const props=withDefaults(defineProps<Props>(),{modelValue:'',options:()=>[],disabled:false,required:false})
const emit=defineEmits<{ 'update:modelValue':[value:string]; change:[event:Event]; focus:[event:FocusEvent]; blur:[event:FocusEvent] }>()
const generated=useId();const selectId=computed(()=>props.id??`uv-select-${generated}`);const describedBy=computed(()=>props.error?`${selectId.value}-error`:props.hint?`${selectId.value}-hint`:undefined)
function onChange(event:Event){emit('update:modelValue',(event.target as HTMLSelectElement).value);emit('change',event)}
</script>
<template><div class="uv-field"><label v-if="label" class="uv-field__label" :for="selectId">{{label}} <span v-if="required" class="uv-field__required" aria-hidden="true">*</span></label><div class="uv-field__control uv-select__control" :class="{'uv-field__control--invalid':error}"><select :id="selectId" class="uv-field__input uv-select__input" :value="modelValue" :name="name" :disabled="disabled" :required="required" :aria-invalid="error?true:undefined" :aria-describedby="describedBy" @change="onChange" @focus="emit('focus',$event)" @blur="emit('blur',$event)"><option v-if="placeholder" value="" disabled>{{placeholder}}</option><option v-for="option in options" :key="String(option.value)" :value="option.value" :disabled="option.disabled">{{option.label}}</option></select><span class="uv-select__arrow" aria-hidden="true">⌄</span></div><p v-if="hint&&!error" :id="`${selectId}-hint`" class="uv-field__hint">{{hint}}</p><p v-if="error" :id="`${selectId}-error`" class="uv-field__error" role="alert">{{error}}</p></div></template>
<style>@import '../shared.css';.uv-select__control{position:relative}.uv-select__input{appearance:none;padding-right:2.5rem}.uv-select__arrow{position:absolute;right:.8rem;pointer-events:none;color:var(--uv-color-text-muted,#64748b)}</style>
