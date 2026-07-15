import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCoordinateDisplay from './UvCoordinateDisplay.vue'

describe('UvCoordinateDisplay', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCoordinateDisplay, { props: { label: 'Coordinate Display', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Coordinate Display')
    expect(wrapper.find('[data-uv-component=UvCoordinateDisplay]').exists()).toBe(true)
  })
})
