import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPreferencePanel from './UvPreferencePanel.vue'

describe('UvPreferencePanel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPreferencePanel, { props: { label: 'Preference Panel', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Preference Panel')
    expect(wrapper.find('[data-uv-component=UvPreferencePanel]').exists()).toBe(true)
  })
})
