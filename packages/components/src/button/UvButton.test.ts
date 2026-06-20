import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvButton from './UvButton.vue'
describe('UvButton',()=>{
  it('renders and emits enabled clicks',async()=>{const wrapper=mount(UvButton,{slots:{default:'Save'}});await wrapper.get('button').trigger('click');expect(wrapper.text()).toContain('Save');expect(wrapper.emitted('click')).toHaveLength(1)})
  it('blocks clicks while disabled',async()=>{const wrapper=mount(UvButton,{props:{disabled:true}});await wrapper.get('button').trigger('click');expect(wrapper.emitted('click')).toBeUndefined()})
  it('announces loading',()=>{const wrapper=mount(UvButton,{props:{loading:true}});expect(wrapper.get('button').attributes('aria-busy')).toBe('true')})
})
