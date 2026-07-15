import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecordActions from './UvRecordActions.vue'

describe('UvRecordActions', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecordActions, { props: { label: 'Record Actions', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Record Actions')
    expect(wrapper.find('[data-uv-component=UvRecordActions]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
