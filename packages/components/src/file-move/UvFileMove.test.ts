import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileMove from './UvFileMove.vue'

describe('UvFileMove', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileMove, { props: { label: 'File Move', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Move')
    expect(wrapper.find('[data-uv-component=UvFileMove]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
