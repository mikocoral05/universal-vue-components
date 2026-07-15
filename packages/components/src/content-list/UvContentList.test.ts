import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvContentList from './UvContentList.vue'

describe('UvContentList', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvContentList, { props: { label: 'Content List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvContentList')
    expect(wrapper.text()).toContain('Content List')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
