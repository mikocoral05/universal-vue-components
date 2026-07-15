import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSpacer from './UvSpacer.vue'

describe('UvSpacer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSpacer, { props: { label: 'Spacer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Spacer')
    expect(wrapper.find('[data-uv-component=UvSpacer]').exists()).toBe(true)
  })
})
