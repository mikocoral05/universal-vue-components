import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMain from './UvMain.vue'

describe('UvMain', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMain, { props: { label: 'Main', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Main')
    expect(wrapper.find('[data-uv-component=UvMain]').exists()).toBe(true)
  })
})
