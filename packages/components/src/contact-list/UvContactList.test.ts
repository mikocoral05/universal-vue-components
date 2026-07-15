import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvContactList from './UvContactList.vue'

describe('UvContactList', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvContactList, { props: { label: 'Contact List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvContactList')
    expect(wrapper.text()).toContain('Contact List')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
