import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvCarousel from './UvCarousel.vue'
const items=[{id:1,title:'First'},{id:2,title:'Second'}]
describe('UvCarousel',()=>{it('moves between slides and emits details',async()=>{const w=mount(UvCarousel,{props:{items,modelValue:0}});expect(w.get('[aria-roledescription=slide]').text()).toContain('First');await w.get('[aria-label="Next slide"]').trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([1]);expect(w.emitted('change')?.[0]?.[0]).toMatchObject({index:1})})})
