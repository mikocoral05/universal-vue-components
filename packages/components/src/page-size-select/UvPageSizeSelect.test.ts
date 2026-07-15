import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPageSizeSelect from './UvPageSizeSelect.vue'

describe('UvPageSizeSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPageSizeSelect, { props: { label: 'Page Size Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Page Size Select')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
