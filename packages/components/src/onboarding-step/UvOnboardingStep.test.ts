import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvOnboardingStep from './UvOnboardingStep.vue'

describe('UvOnboardingStep', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvOnboardingStep, { props: { label: 'Onboarding Step', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Onboarding Step')
    expect(wrapper.find('[data-uv-component=UvOnboardingStep]').exists()).toBe(true)
  })
})
