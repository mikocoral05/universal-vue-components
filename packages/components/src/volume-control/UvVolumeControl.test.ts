import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVolumeControl from './UvVolumeControl.vue'

describe('UvVolumeControl', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVolumeControl, { props: { label: 'Volume Control', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Volume Control')
    expect(wrapper.find('[data-uv-component=UvVolumeControl]').exists()).toBe(true)
  })
})
