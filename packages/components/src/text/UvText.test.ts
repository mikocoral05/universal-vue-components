import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvText from './UvText.vue'

describe('UvText', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvText, { props: { label: 'Text', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Text')
    expect(wrapper.find('[data-uv-component=UvText]').exists()).toBe(true)
  })
})
