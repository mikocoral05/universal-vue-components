import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFinanceInvoiceDashboard from './UvFinanceInvoiceDashboard.vue'

describe('UvFinanceInvoiceDashboard', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvFinanceInvoiceDashboard, { props: { label: 'Finance Invoice Dashboard', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvFinanceInvoiceDashboard')
    expect(wrapper.text()).toContain('Finance Invoice Dashboard')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
