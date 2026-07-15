import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVersionBadge from './UvVersionBadge.vue'

describe('UvVersionBadge', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVersionBadge, { props: { label: 'Version Badge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Version Badge')
    expect(wrapper.find('[data-uv-component=UvVersionBadge]').exists()).toBe(true)
  })
})
