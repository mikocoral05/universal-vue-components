import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvBottomNavigation from './UvBottomNavigation.vue'
describe('UvBottomNavigation',()=>{it('marks and selects the current destination',async()=>{const w=mount(UvBottomNavigation,{props:{modelValue:'home',items:[{id:'home',label:'Home'},{id:'search',label:'Search'}]}});expect(w.findAll('a')[0].attributes('aria-current')).toBe('page');await w.findAll('a')[1].trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual(['search'])})})
