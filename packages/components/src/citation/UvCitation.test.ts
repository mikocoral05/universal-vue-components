import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCitation from './UvCitation.vue'

describe('UvCitation', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCitation, { props: { label: 'Citation', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Citation')
    expect(wrapper.find('[data-uv-component=UvCitation]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
