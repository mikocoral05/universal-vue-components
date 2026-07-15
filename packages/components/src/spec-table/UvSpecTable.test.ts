import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSpecTable from './UvSpecTable.vue'

describe('UvSpecTable', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSpecTable, { props: { label: 'Spec Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Spec Table')
    expect(wrapper.find('[data-uv-component=UvSpecTable]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
