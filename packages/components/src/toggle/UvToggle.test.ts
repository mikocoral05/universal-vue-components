import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvToggle from './UvToggle.vue'
describe('UvToggle',()=>{it('emits pressed state',async()=>{const w=mount(UvToggle,{props:{modelValue:false}});await w.get('button').trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([true]);expect(w.emitted('change')?.[0]).toEqual([{pressed:true}])})})
