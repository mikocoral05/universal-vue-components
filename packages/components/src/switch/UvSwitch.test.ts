import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSwitch from './UvSwitch.vue'
describe('UvSwitch',()=>{it('uses switch semantics',()=>{const wrapper=mount(UvSwitch,{props:{modelValue:true,label:'Notifications'}});expect(wrapper.get('input').attributes('role')).toBe('switch');expect((wrapper.get('input').element as HTMLInputElement).checked).toBe(true)})})
