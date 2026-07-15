import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvScore from './UvScore.vue'

describe('UvScore', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvScore, { props: { label: 'Score', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Score')
    expect(wrapper.find('[data-uv-component=UvScore]').exists()).toBe(true)
  })
})
