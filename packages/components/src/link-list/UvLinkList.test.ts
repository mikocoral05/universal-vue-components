import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLinkList from './UvLinkList.vue'

describe('UvLinkList', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvLinkList, { props: { label: 'Link List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvLinkList')
    expect(wrapper.text()).toContain('Link List')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
