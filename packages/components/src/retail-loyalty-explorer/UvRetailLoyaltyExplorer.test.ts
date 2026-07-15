import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRetailLoyaltyExplorer from './UvRetailLoyaltyExplorer.vue'

describe('UvRetailLoyaltyExplorer', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvRetailLoyaltyExplorer, { props: { label: 'Retail Loyalty Explorer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvRetailLoyaltyExplorer')
    expect(wrapper.text()).toContain('Retail Loyalty Explorer')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
