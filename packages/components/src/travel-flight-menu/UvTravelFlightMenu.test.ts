import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTravelFlightMenu from './UvTravelFlightMenu.vue'

describe('UvTravelFlightMenu', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvTravelFlightMenu, { props: { label: 'Travel Flight Menu', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvTravelFlightMenu')
    expect(wrapper.text()).toContain('Travel Flight Menu')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
