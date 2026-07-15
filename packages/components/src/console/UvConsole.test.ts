import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConsole from './UvConsole.vue'

describe('UvConsole', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvConsole, { props: { label: 'Console', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Console')
    expect(wrapper.find('[data-uv-component=UvConsole]').exists()).toBe(true)
  })
})
