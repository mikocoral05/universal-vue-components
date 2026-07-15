import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAppointmentCard from './UvAppointmentCard.vue'

describe('UvAppointmentCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAppointmentCard, { props: { label: 'Appointment Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Appointment Card')
    expect(wrapper.find('[data-uv-component=UvAppointmentCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
