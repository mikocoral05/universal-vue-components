import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTimeline from './UvTimeline.vue'

const items = [{ id: 1, title: 'Batch started', time: '09:00', datetime: '2026-06-20T09:00:00+08:00', status: 'success' as const }, { id: 2, title: 'Validation', current: true, href: '#validation' }]

describe('UvTimeline', () => {
  it('renders ordered semantic items and current state', () => {
    const wrapper = mount(UvTimeline, { props: { items } })
    expect(wrapper.get('ol').attributes('aria-label')).toBe('Timeline')
    expect(wrapper.findAll('li')).toHaveLength(2)
    expect(wrapper.get('time').attributes('datetime')).toContain('2026-06-20')
    expect(wrapper.get('[aria-current="step"]').text()).toContain('Validation')
  })

  it('accepts JSON items and emits link details', async () => {
    const wrapper = mount(UvTimeline, { props: { itemsJson: JSON.stringify(items) } })
    await wrapper.get('a').trigger('click')
    expect(wrapper.emitted('item-click')?.[0]?.[0]).toMatchObject({ id: 2, index: 1 })
  })
})
