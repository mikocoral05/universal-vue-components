import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBadge from './UvBadge.vue'
describe('UvBadge',()=>{it('renders tone and content',()=>{const wrapper=mount(UvBadge,{props:{tone:'success'},slots:{default:'Stable'}});expect(wrapper.classes()).toContain('uv-badge--success');expect(wrapper.text()).toBe('Stable')})})
