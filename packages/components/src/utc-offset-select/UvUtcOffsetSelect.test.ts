import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUtcOffsetSelect from './UvUtcOffsetSelect.vue'

describe('UvUtcOffsetSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUtcOffsetSelect, { props: { label: 'UTC Offset Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('UTC Offset Select')
    expect(wrapper.find('[data-uv-component=UvUtcOffsetSelect]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
