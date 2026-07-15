import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvTreeView from './UvTreeView.vue'
const nodes=[{id:'src',label:'Source',children:[{id:'button',label:'Button'}]}]
describe('UvTreeView',()=>{it('expands and selects nodes',async()=>{const w=mount(UvTreeView,{props:{nodes}});expect(w.get('[role=tree]').attributes('aria-label')).toBe('Tree view');await w.get('.uv-tree__toggle').trigger('click');expect(w.findAll('[role=treeitem]')).toHaveLength(2);await w.findAll('button').at(-1)!.trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual(['button'])})})
