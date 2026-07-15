import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInstallmentPlan from './UvInstallmentPlan.vue'

describe('UvInstallmentPlan', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInstallmentPlan, { props: { label: 'Installment Plan', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Installment Plan')
    expect(wrapper.find('[data-uv-component=UvInstallmentPlan]').exists()).toBe(true)
  })
})
