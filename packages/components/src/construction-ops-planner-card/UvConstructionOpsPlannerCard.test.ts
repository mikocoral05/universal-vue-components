import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConstructionOpsPlannerCard from './UvConstructionOpsPlannerCard.vue'

describe('UvConstructionOpsPlannerCard', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvConstructionOpsPlannerCard, { props: { label: 'Construction Ops Planner Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvConstructionOpsPlannerCard')
    expect(wrapper.text()).toContain('Construction Ops Planner Card')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
