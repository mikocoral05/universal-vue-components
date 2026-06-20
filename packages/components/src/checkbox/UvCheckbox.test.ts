import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCheckbox from './UvCheckbox.vue'
describe('UvCheckbox',()=>{it('emits checked state',async()=>{const wrapper=mount(UvCheckbox,{props:{modelValue:false,label:'Accept'}});await wrapper.get('input').setValue(true);expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])})})
