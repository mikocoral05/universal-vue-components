import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSearchResults from './UvSearchResults.vue'

describe('UvSearchResults', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSearchResults, { props: { label: 'Search Results', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Search Results')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
