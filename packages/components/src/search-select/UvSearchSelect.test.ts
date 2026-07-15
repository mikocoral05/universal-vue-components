import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSearchSelect from './UvSearchSelect.vue'

describe('UvSearchSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSearchSelect, { props: { label: 'Search Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Search Select')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
