import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIncidentCard from './UvIncidentCard.vue'

describe('UvIncidentCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIncidentCard, { props: { label: 'Incident Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Incident Card')
    expect(wrapper.find('[data-uv-component=UvIncidentCard]').exists()).toBe(true)
  })
})
