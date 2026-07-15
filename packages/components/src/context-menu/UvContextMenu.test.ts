import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvContextMenu from './UvContextMenu.vue'

describe('UvContextMenu', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvContextMenu, { props: { label: 'Context Menu', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Context Menu')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
