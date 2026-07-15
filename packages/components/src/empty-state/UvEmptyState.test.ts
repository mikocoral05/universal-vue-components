import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEmptyState from './UvEmptyState.vue'
describe('UvEmptyState',()=>{it('renders status content and actions',()=>{const w=mount(UvEmptyState,{props:{title:'No results',description:'Try another filter',tone:'info'},slots:{default:'<button>Reset</button>'}});expect(w.get('[role=status]').attributes('aria-label')).toBe('No results');expect(w.text()).toContain('Try another filter');expect(w.get('button').text()).toBe('Reset')})})
