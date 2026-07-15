import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvButtonGroup from './UvButtonGroup.vue'
describe('UvButtonGroup',()=>{it('groups slotted actions',()=>{const w=mount(UvButtonGroup,{props:{label:'Text actions',attached:true},slots:{default:'<button>Bold</button><button>Italic</button>'}});expect(w.get('[role=group]').attributes('aria-label')).toBe('Text actions');expect(w.findAll('button')).toHaveLength(2)})})
