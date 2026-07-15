import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import UvSearchInput from './UvSearchInput.vue'
describe('UvSearchInput',()=>{it('emits debounced search and submit details',async()=>{vi.useFakeTimers();const w=mount(UvSearchInput,{props:{modelValue:'',debounce:50}});await w.get('input').setValue('vue');expect(w.emitted('update:modelValue')?.[0]).toEqual(['vue']);vi.advanceTimersByTime(50);expect(w.emitted('search')?.[0]).toEqual([{query:'vue'}]);await w.get('form').trigger('submit');expect(w.emitted('submit')?.[0]).toEqual([{query:'vue'}]);vi.useRealTimers()})})
