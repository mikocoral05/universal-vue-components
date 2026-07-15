import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvExperimentCard from './UvExperimentCard.vue'

describe('UvExperimentCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvExperimentCard, { props: { label: 'Experiment Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Experiment Card')
    expect(wrapper.find('[data-uv-component=UvExperimentCard]').exists()).toBe(true)
  })
})
