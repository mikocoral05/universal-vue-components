import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvChipGroup from './UvChipGroup.vue'

describe('UvChipGroup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvChipGroup, { props: { label: 'Chip Group', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Chip Group')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
