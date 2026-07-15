import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVirtualList from './UvVirtualList.vue'

describe('UvVirtualList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVirtualList, { props: { label: 'Virtual List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Virtual List')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
