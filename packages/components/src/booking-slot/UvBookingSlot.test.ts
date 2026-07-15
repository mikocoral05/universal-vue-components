import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBookingSlot from './UvBookingSlot.vue'

describe('UvBookingSlot', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBookingSlot, { props: { label: 'Booking Slot', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Booking Slot')
    expect(wrapper.find('[data-uv-component=UvBookingSlot]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
