import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMultiSelect from './UvMultiSelect.vue'

describe('UvMultiSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMultiSelect, { props: { label: 'Multi Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Multi Select')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
