import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDealStage from './UvDealStage.vue'

describe('UvDealStage', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvDealStage, { props: { label: 'Deal Stage', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvDealStage')
    expect(wrapper.text()).toContain('Deal Stage')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
