# @universal-vue/elements

```bash
npm install @universal-vue/elements
```

```ts
import { registerAll } from '@universal-vue/elements'
import '@universal-vue/elements/style.css'

registerAll()
```

```html
<uv-slider label="Coverage" model-value="72" value-suffix="%" show-value></uv-slider>
<uv-divider label="Actions"></uv-divider>
<uv-popover trigger-label="Why universal?">Works in any standards-based frontend.</uv-popover>
<uv-dropdown-menu label="More actions">
  <button type="button" role="menuitem">Preview</button>
</uv-dropdown-menu>
```

CDN after publication:

```html
<script src="https://cdn.jsdelivr.net/npm/@universal-vue/elements@latest/dist/universal-vue.min.js"></script>
<uv-button>Continue</uv-button>
```
