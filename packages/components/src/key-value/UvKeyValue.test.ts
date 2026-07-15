import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvKeyValue from './UvKeyValue.vue'

describe('UvKeyValue', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvKeyValue, { props: { label: 'Key Value', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Key Value')
    expect(wrapper.find('[data-uv-component=UvKeyValue]').exists()).toBe(true)
  })
})
