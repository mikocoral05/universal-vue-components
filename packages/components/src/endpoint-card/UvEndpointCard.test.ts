import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEndpointCard from './UvEndpointCard.vue'

describe('UvEndpointCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvEndpointCard, { props: { label: 'Endpoint Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Endpoint Card')
    expect(wrapper.find('[data-uv-component=UvEndpointCard]').exists()).toBe(true)
  })
})
