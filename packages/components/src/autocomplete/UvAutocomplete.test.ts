import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAutocomplete from './UvAutocomplete.vue'

describe('UvAutocomplete', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAutocomplete, { props: { label: 'Autocomplete', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Autocomplete')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
