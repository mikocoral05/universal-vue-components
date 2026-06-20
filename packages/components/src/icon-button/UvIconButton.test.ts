import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIconButton from './UvIconButton.vue'
describe('UvIconButton',()=>{it('requires and applies an accessible label',()=>{const wrapper=mount(UvIconButton,{props:{label:'Close'},slots:{default:'×'}});expect(wrapper.get('button').attributes('aria-label')).toBe('Close')})})
