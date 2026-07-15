import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommerceOrderTimeline from './UvCommerceOrderTimeline.vue'

describe('UvCommerceOrderTimeline', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvCommerceOrderTimeline, { props: { label: 'Commerce Order Timeline', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvCommerceOrderTimeline')
    expect(wrapper.text()).toContain('Commerce Order Timeline')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
