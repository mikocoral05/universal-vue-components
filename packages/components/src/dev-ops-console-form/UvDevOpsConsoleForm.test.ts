import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDevOpsConsoleForm from './UvDevOpsConsoleForm.vue'

describe('UvDevOpsConsoleForm', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvDevOpsConsoleForm, { props: { label: 'Dev Ops Console Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvDevOpsConsoleForm')
    expect(wrapper.text()).toContain('Dev Ops Console Form')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
