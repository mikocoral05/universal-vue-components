import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommerceSubscriptionDiagram from './UvCommerceSubscriptionDiagram.vue'

describe('UvCommerceSubscriptionDiagram', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvCommerceSubscriptionDiagram, { props: { label: 'Commerce Subscription Diagram', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvCommerceSubscriptionDiagram')
    expect(wrapper.text()).toContain('Commerce Subscription Diagram')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
