import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStatusOverview from './UvStatusOverview.vue'

describe('UvStatusOverview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStatusOverview, { props: { label: 'Status Overview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Status Overview')
    expect(wrapper.find('[data-uv-component=UvStatusOverview]').exists()).toBe(true)
  })
})
