import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBackdrop from './UvBackdrop.vue'

describe('UvBackdrop', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBackdrop, { props: { label: 'Backdrop', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Backdrop')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
