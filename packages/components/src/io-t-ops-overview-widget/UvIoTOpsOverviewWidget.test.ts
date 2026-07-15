import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIoTOpsOverviewWidget from './UvIoTOpsOverviewWidget.vue'

describe('UvIoTOpsOverviewWidget', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvIoTOpsOverviewWidget, { props: { label: 'Io T Ops Overview Widget', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvIoTOpsOverviewWidget')
    expect(wrapper.text()).toContain('Io T Ops Overview Widget')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
