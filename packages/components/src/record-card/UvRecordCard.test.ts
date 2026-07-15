import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecordCard from './UvRecordCard.vue'

describe('UvRecordCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecordCard, { props: { label: 'Record Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Record Card')
    expect(wrapper.find('[data-uv-component=UvRecordCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
