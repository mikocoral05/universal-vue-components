import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTeamList from './UvTeamList.vue'

describe('UvTeamList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTeamList, { props: { label: 'Team List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Team List')
    expect(wrapper.find('[data-uv-component=UvTeamList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
