import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecordDetail from './UvRecordDetail.vue'

describe('UvRecordDetail', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecordDetail, { props: { label: 'Record Detail', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Record Detail')
    expect(wrapper.find('[data-uv-component=UvRecordDetail]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
