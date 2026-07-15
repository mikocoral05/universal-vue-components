import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPanelHeader from './UvPanelHeader.vue'

describe('UvPanelHeader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPanelHeader, { props: { label: 'Panel Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Panel Header')
    expect(wrapper.find('[data-uv-component=UvPanelHeader]').exists()).toBe(true)
  })
})
