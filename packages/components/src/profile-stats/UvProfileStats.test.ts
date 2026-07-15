import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProfileStats from './UvProfileStats.vue'

describe('UvProfileStats', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProfileStats, { props: { label: 'Profile Stats', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Profile Stats')
    expect(wrapper.find('[data-uv-component=UvProfileStats]').exists()).toBe(true)
  })
})
