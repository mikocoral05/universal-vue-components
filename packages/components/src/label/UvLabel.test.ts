import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLabel from './UvLabel.vue'

describe('UvLabel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLabel, { props: { label: 'Label', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Label')
    expect(wrapper.find('[data-uv-component=UvLabel]').exists()).toBe(true)
  })
})
