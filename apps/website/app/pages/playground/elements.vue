<script setup lang="ts">
import { registerAll } from '@universal-vue/elements'

const elementHost = ref<HTMLElement | null>(null)

onMounted(() => {
  const host = elementHost.value
  if (!host) return

  const button = document.createElement('uv-button')
  button.setAttribute('variant', 'primary')
  button.textContent = 'Custom Element button'

  const badge = document.createElement('uv-badge')
  badge.setAttribute('tone', 'success')
  badge.setAttribute('pill', '')
  badge.textContent = 'Web standard'

  const divider = document.createElement('uv-divider')
  divider.setAttribute('label', 'Expansion components')

  const slider = document.createElement('uv-slider')
  slider.setAttribute('label', 'Coverage')
  slider.setAttribute('model-value', '68')
  slider.setAttribute('value-suffix', '%')
  slider.setAttribute('show-value', '')

  const skeleton = document.createElement('uv-skeleton')
  skeleton.setAttribute('lines', '2')
  skeleton.setAttribute('width', '260px')

  const popover = document.createElement('uv-popover')
  popover.setAttribute('trigger-label', 'Open popover')
  const popoverTrigger = document.createElement('span')
  popoverTrigger.slot = 'trigger'
  popoverTrigger.textContent = 'Open popover'
  const popoverBody = document.createElement('p')
  popoverBody.textContent = 'Rendered as a browser Custom Element.'
  popover.append(popoverTrigger, popoverBody)

  const dropdown = document.createElement('uv-dropdown-menu')
  dropdown.setAttribute('label', 'Element actions')
  const menuItem = document.createElement('button')
  menuItem.type = 'button'
  menuItem.setAttribute('role', 'menuitem')
  menuItem.textContent = 'View documentation'
  dropdown.append(menuItem)

  host.replaceChildren(button, badge, divider, slider, skeleton, popover, dropdown)
  registerAll()
})

useSeoMeta({ title: 'Custom Element preview', description: 'Live browser Custom Element preview.' })
</script>

<template>
  <div class="page">
    <div class="site-container prose">
      <span class="eyebrow">Browser-native preview</span>
      <h1>Custom Elements</h1>
      <p>These tags are registered from <code>@universal-vue/elements</code>, not rendered as Vue package components.</p>
      <div class="demo-panel">
        <div class="demo-panel__header">
          <span>Shadow DOM elements</span>
          <span>registered client-side</span>
        </div>
        <div ref="elementHost" class="component-demo" aria-label="Custom Element examples" />
      </div>
      <CodeBlock code="import { registerAll } from '@universal-vue/elements'
registerAll()

<uv-button>Save</uv-button>" language="html" />
    </div>
  </div>
</template>
