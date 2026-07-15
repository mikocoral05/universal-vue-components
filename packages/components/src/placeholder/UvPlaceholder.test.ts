import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPlaceholder from './UvPlaceholder.vue'

describe('UvPlaceholder', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPlaceholder, { props: { label: 'Placeholder', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Placeholder')
    expect(wrapper.find('[data-uv-component=UvPlaceholder]').exists()).toBe(true)
  })
})
