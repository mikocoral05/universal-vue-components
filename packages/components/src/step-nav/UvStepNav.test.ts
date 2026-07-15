import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStepNav from './UvStepNav.vue'

describe('UvStepNav', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStepNav, { props: { label: 'Step Nav', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Step Nav')
    expect(wrapper.find('[data-uv-component=UvStepNav]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
