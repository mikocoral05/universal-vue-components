import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvToolbar from './UvToolbar.vue'
describe('UvToolbar',()=>{it('uses toolbar semantics and emits actions',async()=>{const w=mount(UvToolbar,{slots:{default:'<button>Bold</button><button>Italic</button>'}});expect(w.get('[role=toolbar]').attributes('aria-label')).toBe('Toolbar');await w.findAll('button')[1].trigger('click');expect(w.emitted('action')?.[0]?.[0]).toMatchObject({index:1,label:'Italic'})})})
