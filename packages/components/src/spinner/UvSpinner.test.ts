import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSpinner from './UvSpinner.vue'
describe('UvSpinner',()=>{it('announces loading status',()=>{const wrapper=mount(UvSpinner,{props:{label:'Saving'}});expect(wrapper.attributes('role')).toBe('status');expect(wrapper.text()).toBe('Saving')})})
