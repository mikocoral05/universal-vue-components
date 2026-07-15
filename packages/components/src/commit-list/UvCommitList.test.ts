import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommitList from './UvCommitList.vue'

describe('UvCommitList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCommitList, { props: { label: 'Commit List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Commit List')
    expect(wrapper.find('[data-uv-component=UvCommitList]').exists()).toBe(true)
  })
})
