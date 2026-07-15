import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFormSection from './UvFormSection.vue'

describe('UvFormSection', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFormSection, { props: { label: 'Form Section', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Form Section')
    expect(wrapper.find('[data-uv-component=UvFormSection]').exists()).toBe(true)
  })
})
