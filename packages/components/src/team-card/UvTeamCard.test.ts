import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTeamCard from './UvTeamCard.vue'

describe('UvTeamCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTeamCard, { props: { label: 'Team Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Team Card')
    expect(wrapper.find('[data-uv-component=UvTeamCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
