import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReferenceList from './UvReferenceList.vue'

describe('UvReferenceList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReferenceList, { props: { label: 'Reference List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reference List')
    expect(wrapper.find('[data-uv-component=UvReferenceList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
