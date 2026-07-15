import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStatusDot from './UvStatusDot.vue'

describe('UvStatusDot', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStatusDot, { props: { label: 'Status Dot', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Status Dot')
    expect(wrapper.find('[data-uv-component=UvStatusDot]').exists()).toBe(true)
  })
})
