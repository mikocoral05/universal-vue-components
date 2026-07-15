import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvContactActions from './UvContactActions.vue'

describe('UvContactActions', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvContactActions, { props: { label: 'Contact Actions', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Contact Actions')
    expect(wrapper.find('[data-uv-component=UvContactActions]').exists()).toBe(true)
  })
})
