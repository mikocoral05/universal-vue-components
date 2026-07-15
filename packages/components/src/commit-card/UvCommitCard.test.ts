import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommitCard from './UvCommitCard.vue'

describe('UvCommitCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCommitCard, { props: { label: 'Commit Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Commit Card')
    expect(wrapper.find('[data-uv-component=UvCommitCard]').exists()).toBe(true)
  })
})
