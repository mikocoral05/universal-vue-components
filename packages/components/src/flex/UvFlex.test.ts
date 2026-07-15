import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFlex from './UvFlex.vue'

describe('UvFlex', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFlex, { props: { label: 'Flex', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Flex')
    expect(wrapper.find('[data-uv-component=UvFlex]').exists()).toBe(true)
  })
})
