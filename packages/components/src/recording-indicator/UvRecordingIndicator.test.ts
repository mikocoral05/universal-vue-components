import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecordingIndicator from './UvRecordingIndicator.vue'

describe('UvRecordingIndicator', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecordingIndicator, { props: { label: 'Recording Indicator', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Recording Indicator')
    expect(wrapper.find('[data-uv-component=UvRecordingIndicator]').exists()).toBe(true)
  })
})
