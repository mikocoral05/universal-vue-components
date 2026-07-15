import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvApiExplorer from './UvApiExplorer.vue'

describe('UvApiExplorer', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvApiExplorer, { props: { label: 'API Explorer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvApiExplorer')
    expect(wrapper.text()).toContain('API Explorer')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
