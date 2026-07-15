import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInfiniteScroll from './UvInfiniteScroll.vue'

describe('UvInfiniteScroll', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInfiniteScroll, { props: { label: 'Infinite Scroll', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Infinite Scroll')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
