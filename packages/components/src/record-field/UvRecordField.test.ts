import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecordField from './UvRecordField.vue'

describe('UvRecordField', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecordField, { props: { label: 'Record Field', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Record Field')
    expect(wrapper.find('[data-uv-component=UvRecordField]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
