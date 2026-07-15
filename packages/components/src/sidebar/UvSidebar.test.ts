import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvSidebar from './UvSidebar.vue'
describe('UvSidebar',()=>{it('renders navigation and closes from backdrop',async()=>{const w=mount(UvSidebar,{props:{modelValue:true,mode:'overlay',label:'Project navigation'},slots:{default:'<a href="#docs">Docs</a>'}});expect(w.get('nav').attributes('aria-label')).toBe('Project navigation');await w.get('.uv-sidebar__backdrop').trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([false])})})
