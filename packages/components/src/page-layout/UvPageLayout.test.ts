import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPageLayout from './UvPageLayout.vue'

describe('UvPageLayout', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPageLayout, { props: { label: 'Page Layout', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Page Layout')
    expect(wrapper.find('[data-uv-component=UvPageLayout]').exists()).toBe(true)
  })
})
