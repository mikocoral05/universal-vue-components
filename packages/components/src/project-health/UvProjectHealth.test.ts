import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProjectHealth from './UvProjectHealth.vue'

describe('UvProjectHealth', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProjectHealth, { props: { label: 'Project Health', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Project Health')
    expect(wrapper.find('[data-uv-component=UvProjectHealth]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
