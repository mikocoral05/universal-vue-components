import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRetailReturnSearch from './UvRetailReturnSearch.vue'

describe('UvRetailReturnSearch', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvRetailReturnSearch, { props: { label: 'Retail Return Search', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvRetailReturnSearch')
    expect(wrapper.text()).toContain('Retail Return Search')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
