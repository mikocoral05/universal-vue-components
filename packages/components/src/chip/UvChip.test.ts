import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvChip from './UvChip.vue'

describe('UvChip', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvChip, { props: { label: 'Chip', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Chip')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
