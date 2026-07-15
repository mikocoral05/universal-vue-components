import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvForm from './UvForm.vue'

describe('UvForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvForm, { props: { label: 'Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Form')
    expect(wrapper.find('[data-uv-component=UvForm]').exists()).toBe(true)
  })
})
