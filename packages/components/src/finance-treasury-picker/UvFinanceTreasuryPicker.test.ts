import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFinanceTreasuryPicker from './UvFinanceTreasuryPicker.vue'

describe('UvFinanceTreasuryPicker', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvFinanceTreasuryPicker, { props: { label: 'Finance Treasury Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvFinanceTreasuryPicker')
    expect(wrapper.text()).toContain('Finance Treasury Picker')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
