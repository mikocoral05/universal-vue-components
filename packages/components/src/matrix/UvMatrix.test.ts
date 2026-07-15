import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMatrix from './UvMatrix.vue'

describe('UvMatrix', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMatrix, { props: { label: 'Matrix', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Matrix')
    expect(wrapper.find('[data-uv-component=UvMatrix]').exists()).toBe(true)
  })
})
