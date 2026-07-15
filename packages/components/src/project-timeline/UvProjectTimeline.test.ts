import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProjectTimeline from './UvProjectTimeline.vue'

describe('UvProjectTimeline', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProjectTimeline, { props: { label: 'Project Timeline', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Project Timeline')
    expect(wrapper.find('[data-uv-component=UvProjectTimeline]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
