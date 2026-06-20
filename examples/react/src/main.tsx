import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { registerAll } from '@universal-vue/elements'
import '@universal-vue/elements/style.css'

registerAll()

function App() {
  const button = useRef<HTMLElement>(null)
  useEffect(() => {
    const handler = () => console.log('Custom Element click')
    const element = button.current
    element?.addEventListener('click', handler)
    return () => element?.removeEventListener('click', handler)
  }, [])

  return <main>
    <h1>React fixture</h1>
    <uv-alert title="Framework-independent">Rendered inside React.</uv-alert>
    <uv-input label="Project name"></uv-input>
    <uv-slider label="Coverage" model-value="72" value-suffix="%" show-value></uv-slider>
    <uv-divider label="Actions"></uv-divider>
    <uv-popover trigger-label="Why universal?">One component source can serve every supported host.</uv-popover>
    <uv-button ref={button} variant="primary">Save</uv-button>
  </main>
}

createRoot(document.getElementById('root')!).render(<App />)
