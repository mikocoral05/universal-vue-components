import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvQrCode from './UvQrCode.vue'

describe('UvQrCode', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvQrCode, { props: { label: 'Qr Code', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Qr Code')
    expect(wrapper.find('[data-uv-component=UvQrCode]').exists()).toBe(true)
  })
})
