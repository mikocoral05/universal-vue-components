import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDataGrid from './UvDataGrid.vue'

describe('UvDataGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDataGrid, { props: { label: 'Data Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Data Grid')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
