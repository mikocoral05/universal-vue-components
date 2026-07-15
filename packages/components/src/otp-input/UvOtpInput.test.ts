import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvOtpInput from './UvOtpInput.vue'
describe('UvOtpInput',()=>{it('collects digits and emits completion',async()=>{const w=mount(UvOtpInput,{props:{length:4}});const inputs=w.findAll('input:not([type=hidden])');for(const [i,v] of ['1','2','3','4'].entries())await inputs[i].setValue(v);expect(w.emitted('update:modelValue')?.at(-1)).toEqual(['1234']);expect(w.emitted('complete')?.[0]).toEqual([{value:'1234',complete:true}])})})
