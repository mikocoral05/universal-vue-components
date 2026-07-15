import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvThemeProvider from './UvThemeProvider.vue'

describe('UvThemeProvider', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvThemeProvider, { props: { label: 'Theme Provider', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Theme Provider')
    expect(wrapper.find('[data-uv-component=UvThemeProvider]').exists()).toBe(true)
  })
})
