import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTranscript from './UvTranscript.vue'

describe('UvTranscript', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTranscript, { props: { label: 'Transcript', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Transcript')
    expect(wrapper.find('[data-uv-component=UvTranscript]').exists()).toBe(true)
  })
})
