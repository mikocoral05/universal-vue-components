import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMediaTimeline from './UvMediaTimeline.vue'

describe('UvMediaTimeline', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMediaTimeline, { props: { label: 'Media Timeline', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Media Timeline')
    expect(wrapper.find('[data-uv-component=UvMediaTimeline]').exists()).toBe(true)
  })
})
