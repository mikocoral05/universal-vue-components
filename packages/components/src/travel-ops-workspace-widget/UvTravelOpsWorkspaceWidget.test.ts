import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTravelOpsWorkspaceWidget from './UvTravelOpsWorkspaceWidget.vue'

describe('UvTravelOpsWorkspaceWidget', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvTravelOpsWorkspaceWidget, { props: { label: 'Travel Ops Workspace Widget', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvTravelOpsWorkspaceWidget')
    expect(wrapper.text()).toContain('Travel Ops Workspace Widget')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
