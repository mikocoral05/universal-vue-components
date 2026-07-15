import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStack from './UvStack.vue'

describe('UvStack', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStack, { props: { label: 'Stack', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Stack')
    expect(wrapper.find('[data-uv-component=UvStack]').exists()).toBe(true)
  })
})
