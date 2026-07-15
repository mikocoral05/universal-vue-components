import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvShareButton from './UvShareButton.vue'

describe('UvShareButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvShareButton, { props: { label: 'Share Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Share Button')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
