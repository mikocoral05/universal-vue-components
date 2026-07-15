import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDataMarker from './UvDataMarker.vue'

describe('UvDataMarker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDataMarker, { props: { label: 'Data Marker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Data Marker')
    expect(wrapper.find('[data-uv-component=UvDataMarker]').exists()).toBe(true)
  })
})
