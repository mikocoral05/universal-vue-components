import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReplyComposer from './UvReplyComposer.vue'

describe('UvReplyComposer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReplyComposer, { props: { label: 'Reply Composer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reply Composer')
    expect(wrapper.find('[data-uv-component=UvReplyComposer]').exists()).toBe(true)
  })
})
