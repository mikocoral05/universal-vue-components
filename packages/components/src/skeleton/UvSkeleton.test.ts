import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSkeleton from './UvSkeleton.vue'

describe('UvSkeleton', () => {
  it('announces loading and renders requested lines', () => {
    const wrapper = mount(UvSkeleton, { props: { lines: 3, label: 'Loading profile' } })
    expect(wrapper.get('[role="status"]').attributes('aria-busy')).toBe('true')
    expect(wrapper.findAll('.uv-skeleton__item')).toHaveLength(3)
    expect(wrapper.text()).toContain('Loading profile')
  })

  it('supports circular placeholders', () => {
    const wrapper = mount(UvSkeleton, { props: { variant: 'circular', width: 48 } })
    expect(wrapper.classes()).toContain('uv-skeleton--circular')
    expect(wrapper.get('.uv-skeleton__item').attributes('style')).toContain('48px')
  })
})
