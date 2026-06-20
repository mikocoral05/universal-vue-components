import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTextarea from './UvTextarea.vue'
describe('UvTextarea',()=>{it('shows a count and emits updates',async()=>{const wrapper=mount(UvTextarea,{props:{modelValue:'abc',showCount:true,maxlength:10}});expect(wrapper.text()).toContain('3 / 10');await wrapper.get('textarea').setValue('abcd');expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['abcd'])})})
