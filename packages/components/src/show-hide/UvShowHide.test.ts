import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvShowHide from './UvShowHide.vue'

describe('UvShowHide', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvShowHide, { props: { label: 'Show Hide', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Show Hide')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
