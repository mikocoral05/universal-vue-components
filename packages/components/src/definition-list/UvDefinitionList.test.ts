import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDefinitionList from './UvDefinitionList.vue'

describe('UvDefinitionList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDefinitionList, { props: { label: 'Definition List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Definition List')
    expect(wrapper.find('[data-uv-component=UvDefinitionList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
