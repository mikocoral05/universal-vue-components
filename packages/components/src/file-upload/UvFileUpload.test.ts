import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileUpload from './UvFileUpload.vue'
import type { UvFileRejection, UvFileUploadChangeDetail } from './file-upload.types'

describe('UvFileUpload', () => {
  it('accepts valid files and exposes file metadata', async () => {
    const wrapper = mount(UvFileUpload, { props: { accept: 'image/*', multiple: true } })
    const file = new File(['image'], 'photo.png', { type: 'image/png', lastModified: 1 })
    const input = wrapper.get('input[type="file"]')
    Object.defineProperty(input.element, 'files', { configurable: true, value: [file] })
    await input.trigger('change')
    const detail = wrapper.emitted('change')?.[0]?.[0] as UvFileUploadChangeDetail | undefined
    expect(detail?.fileInfo[0]).toMatchObject({ name: 'photo.png', type: 'image/png' })
    expect(wrapper.text()).toContain('1 file selected')
  })

  it('rejects files that exceed the size limit', async () => {
    const wrapper = mount(UvFileUpload, { props: { maxSize: 2 } })
    const file = new File(['large'], 'large.txt', { type: 'text/plain' })
    const input = wrapper.get('input[type="file"]')
    Object.defineProperty(input.element, 'files', { configurable: true, value: [file] })
    await input.trigger('change')
    const rejections = wrapper.emitted('reject')?.[0]?.[0] as UvFileRejection[] | undefined
    expect(rejections?.[0]).toMatchObject({ reason: 'size' })
    expect(wrapper.get('[role="alert"]').text()).toContain('size limit')
  })
})
