import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLocaleProvider from './UvLocaleProvider.vue'

describe('UvLocaleProvider', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLocaleProvider, { props: { label: 'Locale Provider', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Locale Provider')
    expect(wrapper.find('[data-uv-component=UvLocaleProvider]').exists()).toBe(true)
  })
})
