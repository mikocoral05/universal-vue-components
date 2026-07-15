import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommerceRefundScore from './UvCommerceRefundScore.vue'

describe('UvCommerceRefundScore', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvCommerceRefundScore, { props: { label: 'Commerce Refund Score', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvCommerceRefundScore')
    expect(wrapper.text()).toContain('Commerce Refund Score')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
