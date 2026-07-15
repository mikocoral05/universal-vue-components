import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSortableList from './UvSortableList.vue'

describe('UvSortableList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSortableList, { props: { label: 'Sortable List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Sortable List')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
