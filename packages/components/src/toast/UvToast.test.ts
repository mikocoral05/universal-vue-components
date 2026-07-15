import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import UvToast from './UvToast.vue'

afterEach(() => vi.useRealTimers())

describe('UvToast', () => {
  it('renders live-region notifications and dismisses manually', async () => {
    const wrapper = mount(UvToast, { props: { position: 'inline', items: [{ id: 1, title: 'Saved', message: 'Changes saved', variant: 'success' }] } })
    expect(wrapper.get('[role="region"]').attributes('aria-label')).toBe('Notifications')
    expect(wrapper.get('[role="status"]').text()).toContain('Changes saved')
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('dismiss')?.[0]?.[0]).toMatchObject({ id: 1, reason: 'manual' })
  })

  it('auto-dismisses after the configured duration', async () => {
    vi.useFakeTimers()
    const wrapper = mount(UvToast, { props: { items: [{ id: 'notice', message: 'Temporary', duration: 100 }] } })
    await vi.advanceTimersByTimeAsync(101)
    expect(wrapper.emitted('dismiss')?.[0]?.[0]).toMatchObject({ id: 'notice', reason: 'timeout' })
  })
})
