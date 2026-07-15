import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFooter from './UvFooter.vue'

describe('UvFooter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFooter, { props: { label: 'Footer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Footer')
    expect(wrapper.find('[data-uv-component=UvFooter]').exists()).toBe(true)
  })
})
