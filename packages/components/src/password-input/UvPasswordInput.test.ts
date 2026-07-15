import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPasswordInput from './UvPasswordInput.vue'
describe('UvPasswordInput',()=>{it('reports strength and toggles visibility',async()=>{const w=mount(UvPasswordInput,{props:{showStrength:true}});await w.get('input').setValue('StrongPass1!');expect(w.emitted('strengthChange')?.[0]?.[0]).toMatchObject({strength:'strong'});await w.get('button').trigger('click');expect(w.get('input').attributes('type')).toBe('text');expect(w.emitted('visibilityChange')?.[0]).toEqual([true])})})
