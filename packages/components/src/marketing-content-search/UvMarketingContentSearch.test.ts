import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMarketingContentSearch from './UvMarketingContentSearch.vue'

describe('UvMarketingContentSearch', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvMarketingContentSearch, { props: { label: 'Marketing Content Search', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvMarketingContentSearch')
    expect(wrapper.text()).toContain('Marketing Content Search')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
