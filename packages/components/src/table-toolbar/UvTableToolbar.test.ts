import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTableToolbar from './UvTableToolbar.vue'

describe('UvTableToolbar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTableToolbar, { props: { label: 'Table Toolbar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Table Toolbar')
    expect(wrapper.find('[data-uv-component=UvTableToolbar]').exists()).toBe(true)
  })
})
