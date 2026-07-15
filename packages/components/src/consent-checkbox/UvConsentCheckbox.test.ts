import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConsentCheckbox from './UvConsentCheckbox.vue'

describe('UvConsentCheckbox', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvConsentCheckbox, { props: { label: 'Consent Checkbox', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Consent Checkbox')
    expect(wrapper.find('[data-uv-component=UvConsentCheckbox]').exists()).toBe(true)
  })
})
