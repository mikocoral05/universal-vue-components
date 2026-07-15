import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSection from './UvSection.vue'

describe('UvSection', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSection, { props: { label: 'Section', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Section')
    expect(wrapper.find('[data-uv-component=UvSection]').exists()).toBe(true)
  })
})
