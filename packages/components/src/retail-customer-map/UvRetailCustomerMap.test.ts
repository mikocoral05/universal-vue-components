import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRetailCustomerMap from './UvRetailCustomerMap.vue'

describe('UvRetailCustomerMap', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvRetailCustomerMap, { props: { label: 'Retail Customer Map', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvRetailCustomerMap')
    expect(wrapper.text()).toContain('Retail Customer Map')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
