import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAlert from './UvAlert.vue'
describe('UvAlert',()=>{it('uses alert role for danger and dismisses',async()=>{const wrapper=mount(UvAlert,{props:{tone:'danger',dismissible:true,title:'Error'},slots:{default:'Try again'}});expect(wrapper.attributes('role')).toBe('alert');await wrapper.get('button').trigger('click');expect(wrapper.emitted('dismiss')).toHaveLength(1)})})
