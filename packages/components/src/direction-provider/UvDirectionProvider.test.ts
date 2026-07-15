import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDirectionProvider from './UvDirectionProvider.vue'

describe('UvDirectionProvider', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDirectionProvider, { props: { label: 'Direction Provider', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Direction Provider')
    expect(wrapper.find('[data-uv-component=UvDirectionProvider]').exists()).toBe(true)
  })
})
