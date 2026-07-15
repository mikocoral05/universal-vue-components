import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRiskScore from './UvRiskScore.vue'

describe('UvRiskScore', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRiskScore, { props: { label: 'Risk Score', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Risk Score')
    expect(wrapper.find('[data-uv-component=UvRiskScore]').exists()).toBe(true)
  })
})
