import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAudio from './UvAudio.vue'

describe('UvAudio', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAudio, { props: { label: 'Audio', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Audio')
    expect(wrapper.find('[data-uv-component=UvAudio]').exists()).toBe(true)
  })
})
