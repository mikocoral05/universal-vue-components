import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSalesTerritoryHeader from './UvSalesTerritoryHeader.vue'

describe('UvSalesTerritoryHeader', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvSalesTerritoryHeader, { props: { label: 'Sales Territory Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvSalesTerritoryHeader')
    expect(wrapper.text()).toContain('Sales Territory Header')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
