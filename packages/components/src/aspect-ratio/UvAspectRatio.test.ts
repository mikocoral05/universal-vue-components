import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvAspectRatio from './UvAspectRatio.vue'
describe('UvAspectRatio',()=>{it('applies a semantic ratio and label',()=>{const w=mount(UvAspectRatio,{props:{ratio:'4/3',label:'Preview'},slots:{default:'<img alt="Preview image">'}});expect(w.get('[role=group]').attributes('style')).toContain('aspect-ratio: 4 / 3');expect(w.get('img').attributes('alt')).toBe('Preview image')})})
