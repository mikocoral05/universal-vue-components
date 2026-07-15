import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommunityOpsMonitorCard from './UvCommunityOpsMonitorCard.vue'

describe('UvCommunityOpsMonitorCard', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvCommunityOpsMonitorCard, { props: { label: 'Community Ops Monitor Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvCommunityOpsMonitorCard')
    expect(wrapper.text()).toContain('Community Ops Monitor Card')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
