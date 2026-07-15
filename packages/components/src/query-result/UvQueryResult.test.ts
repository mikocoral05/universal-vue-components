import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvQueryResult from './UvQueryResult.vue'

describe('UvQueryResult', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvQueryResult, { props: { label: 'Query Result', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Query Result')
    expect(wrapper.find('[data-uv-component=UvQueryResult]').exists()).toBe(true)
  })
})
