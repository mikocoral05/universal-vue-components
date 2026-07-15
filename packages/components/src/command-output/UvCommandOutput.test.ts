import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommandOutput from './UvCommandOutput.vue'

describe('UvCommandOutput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCommandOutput, { props: { label: 'Command Output', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Command Output')
    expect(wrapper.find('[data-uv-component=UvCommandOutput]').exists()).toBe(true)
  })
})
