import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHrCandidateDashboard from './UvHrCandidateDashboard.vue'

describe('UvHrCandidateDashboard', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvHrCandidateDashboard, { props: { label: 'Hr Candidate Dashboard', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvHrCandidateDashboard')
    expect(wrapper.text()).toContain('Hr Candidate Dashboard')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
