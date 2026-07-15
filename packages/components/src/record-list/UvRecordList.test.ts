import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecordList from './UvRecordList.vue'

describe('UvRecordList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecordList, { props: { label: 'Record List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Record List')
    expect(wrapper.find('[data-uv-component=UvRecordList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
