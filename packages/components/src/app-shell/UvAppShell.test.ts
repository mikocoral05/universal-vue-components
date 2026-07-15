import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAppShell from './UvAppShell.vue'

describe('UvAppShell', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAppShell, { props: { label: 'App Shell', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('App Shell')
    expect(wrapper.find('[data-uv-component=UvAppShell]').exists()).toBe(true)
  })
})
