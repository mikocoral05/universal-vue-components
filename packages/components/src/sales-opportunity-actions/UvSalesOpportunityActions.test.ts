import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSalesOpportunityActions from './UvSalesOpportunityActions.vue'

describe('UvSalesOpportunityActions', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvSalesOpportunityActions, { props: { label: 'Sales Opportunity Actions', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvSalesOpportunityActions')
    expect(wrapper.text()).toContain('Sales Opportunity Actions')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
