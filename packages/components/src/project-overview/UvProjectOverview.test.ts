import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProjectOverview from './UvProjectOverview.vue'

describe('UvProjectOverview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProjectOverview, { props: { label: 'Project Overview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Project Overview')
    expect(wrapper.find('[data-uv-component=UvProjectOverview]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
