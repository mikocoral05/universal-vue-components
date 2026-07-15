import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMailPreview from './UvMailPreview.vue'

describe('UvMailPreview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMailPreview, { props: { label: 'Mail Preview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Mail Preview')
    expect(wrapper.find('[data-uv-component=UvMailPreview]').exists()).toBe(true)
  })
})
