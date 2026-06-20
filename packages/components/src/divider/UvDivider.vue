<script setup lang="ts">
import type { UvDividerOrientation } from './divider.types'

interface Props {
  orientation?: UvDividerOrientation
  label?: string
  inset?: boolean
  decorative?: boolean
}

withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  label: '',
  inset: false,
  decorative: false
})
</script>

<template>
  <div
    class="uv-divider"
    :class="[
      `uv-divider--${orientation}`,
      { 'uv-divider--inset': inset, 'uv-divider--labelled': label && orientation === 'horizontal' }
    ]"
    :role="decorative ? 'presentation' : 'separator'"
    :aria-hidden="decorative ? 'true' : undefined"
    :aria-orientation="!decorative ? orientation : undefined"
    :aria-label="!decorative && label ? label : undefined"
  >
    <span v-if="label && orientation === 'horizontal'" class="uv-divider__label">{{ label }}</span>
  </div>
</template>

<style>
.uv-divider{--_color:var(--uv-color-border,#dbe3ef);box-sizing:border-box;flex:none;color:var(--uv-color-text-muted,#64748b);font-family:var(--uv-font-sans,system-ui,sans-serif)}
.uv-divider--horizontal{display:flex;width:100%;align-items:center;border:0;border-top:1px solid var(--_color)}
.uv-divider--horizontal.uv-divider--inset{width:calc(100% - 2rem);margin-inline:1rem}
.uv-divider--vertical{display:inline-block;align-self:stretch;min-height:1.5rem;border:0;border-left:1px solid var(--_color)}
.uv-divider--vertical.uv-divider--inset{margin-block:.5rem}
.uv-divider--labelled{gap:.75rem;border-top:0}
.uv-divider--labelled::before,.uv-divider--labelled::after{content:'';height:1px;flex:1;background:var(--_color)}
.uv-divider__label{flex:none;font-size:.8125rem;font-weight:600;line-height:1.4}
</style>
