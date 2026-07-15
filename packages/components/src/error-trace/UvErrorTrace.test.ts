import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvErrorTrace from './UvErrorTrace.vue'

describe('UvErrorTrace', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvErrorTrace, { props: { label: 'Error Trace', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Error Trace')
    expect(wrapper.find('[data-uv-component=UvErrorTrace]').exists()).toBe(true)
  })
})
