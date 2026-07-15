import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvScrollArea from './UvScrollArea.vue'
describe('UvScrollArea',()=>{it('uses region semantics and emits scroll detail',async()=>{const w=mount(UvScrollArea,{props:{label:'Activity log'},slots:{default:'Content'}});expect(w.get('[role=region]').attributes('aria-label')).toBe('Activity log');await w.get('[role=region]').trigger('scroll');expect(w.emitted('scroll')?.[0]?.[0]).toMatchObject({scrollTop:0,atStart:true})})})
