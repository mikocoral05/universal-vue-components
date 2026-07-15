import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDetails from './UvDetails.vue'

describe('UvDetails', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDetails, { props: { label: 'Details', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Details')
    expect(wrapper.find('[data-uv-component=UvDetails]').exists()).toBe(true)
  })
})
