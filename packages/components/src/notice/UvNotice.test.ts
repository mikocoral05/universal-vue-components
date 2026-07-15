import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNotice from './UvNotice.vue'

describe('UvNotice', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvNotice, { props: { label: 'Notice', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Notice')
    expect(wrapper.find('[data-uv-component=UvNotice]').exists()).toBe(true)
  })
})
