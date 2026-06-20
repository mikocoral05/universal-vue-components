<script setup lang="ts">
const route = useRoute()
const key = String(route.params.framework)
const data: Record<string, { title: string; description: string; code: string }> = {
  react: {
    title: 'React integration',
    description: 'Register Custom Elements once and use refs for custom events or complex properties.',
    code: `import '@universal-vue/elements/cdn'

export function App() {
  return <uv-button variant="primary">Save</uv-button>
}`
  },
  angular: {
    title: 'Angular integration',
    description: 'Add CUSTOM_ELEMENTS_SCHEMA and use Universal Vue tags in templates.',
    code: `schemas: [CUSTOM_ELEMENTS_SCHEMA]

// template
<uv-button variant="primary">Save</uv-button>`
  },
  svelte: {
    title: 'Svelte integration',
    description: 'Import the registration module and use elements directly in Svelte markup.',
    code: `<script>
  import '@universal-vue/elements/cdn'
${'</'}script>

<uv-button>Save</uv-button>`
  },
  laravel: {
    title: 'Laravel Blade integration',
    description: 'Load the CDN or compiled npm bundle, then use tags in Blade templates.',
    code: `<script src="/assets/universal-vue.min.js">${'</'}script>
<uv-button>Submit</uv-button>`
  },
  wordpress: {
    title: 'WordPress integration',
    description: 'Enqueue the browser bundle and render elements in blocks, templates, or shortcodes.',
    code: `wp_enqueue_script('universal-vue', $url, [], null, true);`
  },
  'plain-html': {
    title: 'Plain HTML integration',
    description: 'Use the CDN bundle with no framework and no build process.',
    code: `<script src="https://cdn.jsdelivr.net/npm/@universal-vue/elements@0.1.0-alpha.1/dist/universal-vue.min.js">${'</'}script>
<uv-button>Continue</uv-button>`
  }
}
const item = data[key]
if (!item) throw createError({ statusCode: 404, statusMessage: 'Integration not found' })
useSeoMeta({ title: item.title, description: item.description })
</script>
<template>
  <div class="page">
    <div class="site-container prose">
      <span class="eyebrow">Framework integration</span>
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <CodeBlock :code="item.code" />
      <h2>Important behavior</h2>
      <ul>
        <li>Register each tag once.</li>
        <li>Assign objects and arrays as DOM properties.</li>
        <li>Use native Custom Event listeners where framework event mapping differs.</li>
        <li>Test form participation and SSR hydration in the host framework.</li>
      </ul>
    </div>
  </div>
</template>
