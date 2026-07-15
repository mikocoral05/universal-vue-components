import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBox from './UvBox.vue'

describe('UvBox', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBox, { props: { label: 'Box', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Box')
    expect(wrapper.find('[data-uv-component=UvBox]').exists()).toBe(true)
  })
})
