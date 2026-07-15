import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRangeSlider from './UvRangeSlider.vue'
describe('UvRangeSlider',()=>{it('keeps thumbs ordered and emits details',async()=>{const w=mount(UvRangeSlider,{props:{modelValue:[20,80]}});const sliders=w.findAll('input');await sliders[0].setValue('90');expect(w.emitted('update:modelValue')?.[0]).toEqual([[80,80]]);expect(w.emitted('input')?.[0]?.[0]).toMatchObject({activeThumb:'start'})})})
