import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNameField from './UvNameField.vue'

describe('UvNameField', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvNameField, { props: { label: 'Name Field', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Name Field')
    expect(wrapper.find('[data-uv-component=UvNameField]').exists()).toBe(true)
  })
})
