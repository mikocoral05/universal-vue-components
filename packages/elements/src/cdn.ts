import { registerAll } from './index'

function installDefaultTokens(): void {
  if (typeof document === 'undefined' || document.getElementById('universal-vue-default-tokens')) return
  const style = document.createElement('style')
  style.id = 'universal-vue-default-tokens'
  style.textContent = `:root{--uv-font-sans:Inter,ui-sans-serif,system-ui,sans-serif;--uv-color-primary:#2563eb;--uv-color-primary-hover:#1d4ed8;--uv-color-primary-contrast:#fff;--uv-color-secondary:#7c3aed;--uv-color-success:#15803d;--uv-color-warning:#b45309;--uv-color-danger:#dc2626;--uv-color-text:#0f172a;--uv-color-text-muted:#64748b;--uv-color-surface:#fff;--uv-color-surface-subtle:#f8fafc;--uv-color-border:#dbe3ef;--uv-color-border-strong:#94a3b8;--uv-radius-sm:.375rem;--uv-radius-md:.625rem;--uv-radius-lg:.875rem;--uv-focus-ring:0 0 0 3px rgb(37 99 235/.25)}`
  document.head.appendChild(style)
}

installDefaultTokens()
registerAll()
export * from './index'
