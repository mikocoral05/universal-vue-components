import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMilestone from './UvMilestone.vue'

describe('UvMilestone', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMilestone, { props: { label: 'Milestone', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Milestone')
    expect(wrapper.find('[data-uv-component=UvMilestone]').exists()).toBe(true)
  })
})
