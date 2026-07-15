import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCopyButton from './UvCopyButton.vue'

describe('UvCopyButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCopyButton, { props: { label: 'Copy Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Copy Button')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
