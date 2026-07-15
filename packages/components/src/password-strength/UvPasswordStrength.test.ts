import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPasswordStrength from './UvPasswordStrength.vue'

describe('UvPasswordStrength', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPasswordStrength, { props: { label: 'Password Strength', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Password Strength')
    expect(wrapper.find('[data-uv-component=UvPasswordStrength]').exists()).toBe(true)
  })
})
