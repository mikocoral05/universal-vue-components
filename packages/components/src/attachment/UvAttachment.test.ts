import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAttachment from './UvAttachment.vue'

describe('UvAttachment', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAttachment, { props: { label: 'Attachment', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Attachment')
    expect(wrapper.find('[data-uv-component=UvAttachment]').exists()).toBe(true)
  })
})
