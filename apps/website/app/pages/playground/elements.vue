<script setup lang="ts">
useSeoMeta({
  title: 'Custom Element preview',
  description: 'Live browser Custom Element preview.'
})
</script>

<template>
  <div class="page">
    <div class="site-container prose">
      <span class="eyebrow">Browser-native preview</span>
      <h1>Custom Elements</h1>
      <p>
        These tags are registered from <code>@universal-vue/elements</code>, not rendered as Vue
        package components.
      </p>

      <div class="demo-panel">
        <div class="demo-panel__header">
          <span>Shadow DOM elements</span>
          <span>registered client-side</span>
        </div>

        <div class="component-demo" aria-label="Custom Element examples">
          <uv-button variant="primary">Custom Element button</uv-button>
          <uv-badge tone="success" pill>Web standard</uv-badge>
          <uv-spinner label="Loading element" />
        </div>
      </div>

      <CodeBlock
        code="import { registerAll } from '@universal-vue/elements'
registerAll()

<uv-button>Save</uv-button>"
        language="html"
      />
    </div>
  </div>
</template>
