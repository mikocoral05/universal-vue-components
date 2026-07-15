import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMicrophoneMeter from './UvMicrophoneMeter.vue'

describe('UvMicrophoneMeter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMicrophoneMeter, { props: { label: 'Microphone Meter', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Microphone Meter')
    expect(wrapper.find('[data-uv-component=UvMicrophoneMeter]').exists()).toBe(true)
  })
})
