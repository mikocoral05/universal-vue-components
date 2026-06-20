import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInput from './UvInput.vue'
describe('UvInput',()=>{
 it('updates v-model',async()=>{const wrapper=mount(UvInput,{props:{modelValue:'old',label:'Name'}});await wrapper.get('input').setValue('new');expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new'])})
 it('connects error text',()=>{const wrapper=mount(UvInput,{props:{label:'Email',error:'Required'}});expect(wrapper.get('input').attributes('aria-invalid')).toBe('true');expect(wrapper.get('[role=alert]').text()).toBe('Required')})
})
