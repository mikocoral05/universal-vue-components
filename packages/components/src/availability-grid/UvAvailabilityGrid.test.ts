import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAvailabilityGrid from './UvAvailabilityGrid.vue'

describe('UvAvailabilityGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAvailabilityGrid, { props: { label: 'Availability Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Availability Grid')
    expect(wrapper.find('[data-uv-component=UvAvailabilityGrid]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
