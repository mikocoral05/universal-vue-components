import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIncidentTimeline from './UvIncidentTimeline.vue'

describe('UvIncidentTimeline', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIncidentTimeline, { props: { label: 'Incident Timeline', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Incident Timeline')
    expect(wrapper.find('[data-uv-component=UvIncidentTimeline]').exists()).toBe(true)
  })
})
