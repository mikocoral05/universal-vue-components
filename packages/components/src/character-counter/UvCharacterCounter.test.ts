import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCharacterCounter from './UvCharacterCounter.vue'

describe('UvCharacterCounter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCharacterCounter, { props: { label: 'Character Counter', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Character Counter')
    expect(wrapper.find('[data-uv-component=UvCharacterCounter]').exists()).toBe(true)
  })
})
