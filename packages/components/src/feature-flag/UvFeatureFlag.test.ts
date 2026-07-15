import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFeatureFlag from './UvFeatureFlag.vue'

describe('UvFeatureFlag', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFeatureFlag, { props: { label: 'Feature Flag', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Feature Flag')
    expect(wrapper.find('[data-uv-component=UvFeatureFlag]').exists()).toBe(true)
  })
})
