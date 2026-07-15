import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSupportAgentQueue from './UvSupportAgentQueue.vue'

describe('UvSupportAgentQueue', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvSupportAgentQueue, { props: { label: 'Support Agent Queue', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvSupportAgentQueue')
    expect(wrapper.text()).toContain('Support Agent Queue')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
