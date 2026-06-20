import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDivider from './UvDivider.vue'

describe('UvDivider', () => {
  it('renders separator semantics and a label', () => {
    const wrapper = mount(UvDivider, { props: { label: 'Details' } })
    expect(wrapper.get('[role="separator"]').attributes('aria-orientation')).toBe('horizontal')
    expect(wrapper.text()).toContain('Details')
  })

  it('can be decorative', () => {
    const wrapper = mount(UvDivider, { props: { decorative: true } })
    expect(wrapper.attributes('role')).toBe('presentation')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })
})
