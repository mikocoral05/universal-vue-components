import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHealthInsuranceMonitor from './UvHealthInsuranceMonitor.vue'

describe('UvHealthInsuranceMonitor', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvHealthInsuranceMonitor, { props: { label: 'Health Insurance Monitor', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvHealthInsuranceMonitor')
    expect(wrapper.text()).toContain('Health Insurance Monitor')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
