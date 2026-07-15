import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSurface from './UvSurface.vue'

describe('UvSurface', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSurface, { props: { label: 'Surface', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Surface')
    expect(wrapper.find('[data-uv-component=UvSurface]').exists()).toBe(true)
  })
})
