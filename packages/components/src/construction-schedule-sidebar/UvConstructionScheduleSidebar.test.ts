import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConstructionScheduleSidebar from './UvConstructionScheduleSidebar.vue'

describe('UvConstructionScheduleSidebar', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvConstructionScheduleSidebar, { props: { label: 'Construction Schedule Sidebar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvConstructionScheduleSidebar')
    expect(wrapper.text()).toContain('Construction Schedule Sidebar')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
