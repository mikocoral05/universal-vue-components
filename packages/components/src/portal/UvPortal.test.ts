import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPortal from './UvPortal.vue'

describe('UvPortal', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPortal, { props: { label: 'Portal', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Portal')
    expect(wrapper.find('[data-uv-component=UvPortal]').exists()).toBe(true)
  })
})
