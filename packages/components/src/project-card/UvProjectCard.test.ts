import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProjectCard from './UvProjectCard.vue'

describe('UvProjectCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProjectCard, { props: { label: 'Project Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Project Card')
    expect(wrapper.find('[data-uv-component=UvProjectCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
