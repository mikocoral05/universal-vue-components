import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReleaseChannel from './UvReleaseChannel.vue'

describe('UvReleaseChannel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReleaseChannel, { props: { label: 'Release Channel', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Release Channel')
    expect(wrapper.find('[data-uv-component=UvReleaseChannel]').exists()).toBe(true)
  })
})
