import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHospitalityCheckInCalendar from './UvHospitalityCheckInCalendar.vue'

describe('UvHospitalityCheckInCalendar', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvHospitalityCheckInCalendar, { props: { label: 'Hospitality Check In Calendar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvHospitalityCheckInCalendar')
    expect(wrapper.text()).toContain('Hospitality Check In Calendar')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
