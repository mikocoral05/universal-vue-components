import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMediaControls from './UvMediaControls.vue'

describe('UvMediaControls', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMediaControls, { props: { label: 'Media Controls', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Media Controls')
    expect(wrapper.find('[data-uv-component=UvMediaControls]').exists()).toBe(true)
  })
})
