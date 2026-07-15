import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommentThread from './UvCommentThread.vue'

describe('UvCommentThread', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCommentThread, { props: { label: 'Comment Thread', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Comment Thread')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
