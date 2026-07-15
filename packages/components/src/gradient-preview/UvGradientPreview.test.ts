import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvGradientPreview from './UvGradientPreview.vue'

describe('UvGradientPreview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvGradientPreview, { props: { label: 'Gradient Preview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Gradient Preview')
    expect(wrapper.find('[data-uv-component=UvGradientPreview]').exists()).toBe(true)
  })
})
