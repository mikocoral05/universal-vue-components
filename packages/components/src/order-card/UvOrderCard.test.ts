import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvOrderCard from './UvOrderCard.vue'

describe('UvOrderCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvOrderCard, { props: { label: 'Order Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Order Card')
    expect(wrapper.find('[data-uv-component=UvOrderCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
