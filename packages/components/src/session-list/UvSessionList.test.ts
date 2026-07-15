import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSessionList from './UvSessionList.vue'

describe('UvSessionList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSessionList, { props: { label: 'Session List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Session List')
    expect(wrapper.find('[data-uv-component=UvSessionList]').exists()).toBe(true)
  })
})
