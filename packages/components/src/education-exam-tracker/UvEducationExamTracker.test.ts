import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEducationExamTracker from './UvEducationExamTracker.vue'

describe('UvEducationExamTracker', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvEducationExamTracker, { props: { label: 'Education Exam Tracker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvEducationExamTracker')
    expect(wrapper.text()).toContain('Education Exam Tracker')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
