import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIcon from './UvIcon.vue'

describe('UvIcon', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIcon, { props: { label: 'Icon', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Icon')
    expect(wrapper.find('[data-uv-component=UvIcon]').exists()).toBe(true)
  })
})
