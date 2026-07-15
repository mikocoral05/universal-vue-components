import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvOrderList from './UvOrderList.vue'

describe('UvOrderList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvOrderList, { props: { label: 'Order List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Order List')
    expect(wrapper.find('[data-uv-component=UvOrderList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
