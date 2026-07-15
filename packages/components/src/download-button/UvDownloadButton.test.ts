import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDownloadButton from './UvDownloadButton.vue'

describe('UvDownloadButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDownloadButton, { props: { label: 'Download Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Download Button')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
