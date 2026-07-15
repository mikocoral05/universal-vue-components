import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTimezoneSelect from './UvTimezoneSelect.vue'

describe('UvTimezoneSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTimezoneSelect, { props: { label: 'Timezone Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Timezone Select')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
