import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTokenUsage from './UvTokenUsage.vue'

describe('UvTokenUsage', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTokenUsage, { props: { label: 'Token Usage', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Token Usage')
    expect(wrapper.find('[data-uv-component=UvTokenUsage]').exists()).toBe(true)
  })
})
