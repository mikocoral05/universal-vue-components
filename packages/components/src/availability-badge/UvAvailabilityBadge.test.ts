import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAvailabilityBadge from './UvAvailabilityBadge.vue'

describe('UvAvailabilityBadge', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvAvailabilityBadge, { props: { label: 'Availability Badge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvAvailabilityBadge')
    expect(wrapper.text()).toContain('Availability Badge')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
