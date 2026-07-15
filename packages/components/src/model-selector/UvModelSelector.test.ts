import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvModelSelector from './UvModelSelector.vue'

describe('UvModelSelector', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvModelSelector, { props: { label: 'Model Selector', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Model Selector')
    expect(wrapper.find('[data-uv-component=UvModelSelector]').exists()).toBe(true)
  })
})
