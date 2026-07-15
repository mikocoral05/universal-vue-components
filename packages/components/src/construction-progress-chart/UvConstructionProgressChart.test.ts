import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConstructionProgressChart from './UvConstructionProgressChart.vue'

describe('UvConstructionProgressChart', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvConstructionProgressChart, { props: { label: 'Construction Progress Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvConstructionProgressChart')
    expect(wrapper.text()).toContain('Construction Progress Chart')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
