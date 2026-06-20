import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRadio from './UvRadio.vue'
describe('UvRadio',()=>{it('emits its typed value',async()=>{const wrapper=mount(UvRadio,{props:{modelValue:null,value:2,label:'Two'}});await wrapper.get('input').setValue(true);expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])})})
