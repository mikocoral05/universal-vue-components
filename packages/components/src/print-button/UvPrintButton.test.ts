import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPrintButton from './UvPrintButton.vue'

describe('UvPrintButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPrintButton, { props: { label: 'Print Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Print Button')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
