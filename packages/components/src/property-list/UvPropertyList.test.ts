import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPropertyList from './UvPropertyList.vue'

describe('UvPropertyList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPropertyList, { props: { label: 'Property List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Property List')
    expect(wrapper.find('[data-uv-component=UvPropertyList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
