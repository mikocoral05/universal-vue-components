import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSheet from './UvSheet.vue'

describe('UvSheet', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSheet, { props: { label: 'Sheet', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Sheet')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
