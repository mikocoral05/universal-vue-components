import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvWidget from './UvWidget.vue'

describe('UvWidget', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvWidget, { props: { label: 'Widget', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Widget')
    expect(wrapper.find('[data-uv-component=UvWidget]').exists()).toBe(true)
  })
})
