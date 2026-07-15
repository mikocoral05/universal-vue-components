import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTestimonial from './UvTestimonial.vue'

describe('UvTestimonial', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTestimonial, { props: { label: 'Testimonial', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Testimonial')
    expect(wrapper.find('[data-uv-component=UvTestimonial]').exists()).toBe(true)
  })
})
