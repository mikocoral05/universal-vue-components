import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSupportEscalationSelector from './UvSupportEscalationSelector.vue'

describe('UvSupportEscalationSelector', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvSupportEscalationSelector, { props: { label: 'Support Escalation Selector', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvSupportEscalationSelector')
    expect(wrapper.text()).toContain('Support Escalation Selector')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
