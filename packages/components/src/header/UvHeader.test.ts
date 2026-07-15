import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHeader from './UvHeader.vue'

describe('UvHeader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHeader, { props: { label: 'Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Header')
    expect(wrapper.find('[data-uv-component=UvHeader]').exists()).toBe(true)
  })
})
