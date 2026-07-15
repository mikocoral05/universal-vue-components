import { mount } from '@vue/test-utils'
import { describe,expect,it,vi } from 'vitest'
import UvHoverCard from './UvHoverCard.vue'
describe('UvHoverCard',()=>{it('opens after pointer delay',async()=>{vi.useFakeTimers();const w=mount(UvHoverCard,{props:{modelValue:false,openDelay:10},slots:{default:'Details'}});await w.get('.uv-hover-card').trigger('mouseenter');vi.advanceTimersByTime(10);expect(w.emitted('update:modelValue')?.[0]).toEqual([true]);vi.useRealTimers()})})
