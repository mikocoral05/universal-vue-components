import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFilterChip from './UvFilterChip.vue'

describe('UvFilterChip', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFilterChip, { props: { label: 'Filter Chip', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Filter Chip')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
