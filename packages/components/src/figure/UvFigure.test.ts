import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFigure from './UvFigure.vue'

describe('UvFigure', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFigure, { props: { label: 'Figure', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Figure')
    expect(wrapper.find('[data-uv-component=UvFigure]').exists()).toBe(true)
  })
})
