<script setup lang="ts">
useSeoMeta({ title: 'Web Components', description: 'Use Universal Vue Custom Elements in React, Angular, Svelte, Laravel, WordPress, and plain HTML.' })
const setup = `import { registerAll } from '@universal-vue/elements'
registerAll()`
const html = `<uv-button variant="primary">Save changes</uv-button>
<uv-input label="Project name"></uv-input>`
const react = `import { useEffect, useRef } from 'react'
import '@universal-vue/elements'

export function SaveButton() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const handler = () => console.log('saved')
    ref.current?.addEventListener('click', handler)
    return () => ref.current?.removeEventListener('click', handler)
  }, [])
  return <uv-button ref={ref}>Save</uv-button>
}`
</script>
<template>
  <div class="page">
    <div class="site-container docs-layout">
      <DocsSidebar />
      <article class="prose">
        <span class="eyebrow">Standards package</span>
        <h1>Web Components</h1>
        <p>Custom Elements use browser APIs, so the host application does not need to be written in Vue.</p>
        <h2>Register all elements</h2>
        <CodeBlock :code="setup" />
        <h2>Use HTML tags</h2>
        <CodeBlock :code="html" language="html" />
        <h2>React event handling</h2>
        <CodeBlock :code="react" language="tsx" />
        <h2>Properties and attributes</h2>
        <p>Strings and booleans can usually be expressed as attributes. Objects, arrays, and complex values should be assigned as DOM properties. Listen for Custom Events with <code>addEventListener</code> when a framework does not map them automatically.</p>
      </article>
    </div>
  </div>
</template>
