import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCenter from './UvCenter.vue'

describe('UvCenter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCenter, { props: { label: 'Center', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Center')
    expect(wrapper.find('[data-uv-component=UvCenter]').exists()).toBe(true)
  })
})
