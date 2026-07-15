# @universal-vue/elements

```bash
npm install @universal-vue/elements
```

```ts
import { registerAll } from '@universal-vue/elements'
import '@universal-vue/elements/style.css'

registerAll()
```

Primitive values use normal HTML attributes. Complex component data can be assigned as a DOM property or supplied through the documented JSON fallback attributes.

```html
<uv-form-field label="Repository URL" for-id="repository">
  <input id="repository" value="https://github.com/universal-vue/components">
</uv-form-field>
<uv-stepper
  model-value="integrate"
  steps-json='[{"id":"install","label":"Install"},{"id":"integrate","label":"Integrate"}]'>
</uv-stepper>
<uv-command-palette
  mode="inline"
  commands-json='[{"id":"docs","label":"Open documentation"}]'>
</uv-command-palette>
<uv-timeline items-json='[{"id":1,"title":"Elements registered","status":"success"}]'></uv-timeline>
```

CDN after publication:

```html
<script src="https://cdn.jsdelivr.net/npm/@universal-vue/elements@latest/dist/universal-vue.min.js"></script>
<uv-button>Continue</uv-button>
```
