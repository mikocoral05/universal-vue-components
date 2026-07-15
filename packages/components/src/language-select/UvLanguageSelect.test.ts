import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLanguageSelect from './UvLanguageSelect.vue'

describe('UvLanguageSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLanguageSelect, { props: { label: 'Language Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Language Select')
    expect(wrapper.find('[data-uv-component=UvLanguageSelect]').exists()).toBe(true)
  })
})
