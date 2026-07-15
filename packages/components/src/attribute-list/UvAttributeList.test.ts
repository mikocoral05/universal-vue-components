import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAttributeList from './UvAttributeList.vue'

describe('UvAttributeList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAttributeList, { props: { label: 'Attribute List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Attribute List')
    expect(wrapper.find('[data-uv-component=UvAttributeList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
