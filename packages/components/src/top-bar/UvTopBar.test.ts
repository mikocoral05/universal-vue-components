import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTopBar from './UvTopBar.vue'

describe('UvTopBar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTopBar, { props: { label: 'Top Bar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Top Bar')
    expect(wrapper.find('[data-uv-component=UvTopBar]').exists()).toBe(true)
  })
})
