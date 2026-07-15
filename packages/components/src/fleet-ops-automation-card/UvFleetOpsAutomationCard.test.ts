import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFleetOpsAutomationCard from './UvFleetOpsAutomationCard.vue'

describe('UvFleetOpsAutomationCard', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvFleetOpsAutomationCard, { props: { label: 'Fleet Ops Automation Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvFleetOpsAutomationCard')
    expect(wrapper.text()).toContain('Fleet Ops Automation Card')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
