import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvResult from './UvResult.vue'

describe('UvResult', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvResult, { props: { label: 'Result', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Result')
    expect(wrapper.find('[data-uv-component=UvResult]').exists()).toBe(true)
  })
})
