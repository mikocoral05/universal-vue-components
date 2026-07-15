import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSportsOpsMonitorForm from './UvSportsOpsMonitorForm.vue'

describe('UvSportsOpsMonitorForm', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvSportsOpsMonitorForm, { props: { label: 'Sports Ops Monitor Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvSportsOpsMonitorForm')
    expect(wrapper.text()).toContain('Sports Ops Monitor Form')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
