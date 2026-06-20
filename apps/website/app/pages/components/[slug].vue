<script setup lang="ts">
import { componentBySlug } from '@universal-vue/metadata'
import { UvBadge } from '@universal-vue/vue'
const route=useRoute();const item=componentBySlug[String(route.params.slug)]
if(!item) throw createError({statusCode:404,statusMessage:'Component not found'})
useSeoMeta({title:item.name,description:item.description})
const vueCode=`<script setup lang="ts">
import { ${item.name} } from '@universal-vue/vue'
${'</'}script>

<template>
  <${item.name}>Example</${item.name}>
</template>`
const elementCode=`import { registerElement } from '@universal-vue/elements'
registerElement('${item.tagName}')

// HTML
<${item.tagName}>Example</${item.tagName}>`
</script>
<template><div class="page"><div class="site-container docs-layout"><DocsSidebar/><article class="prose"><div style="display:flex;gap:.6rem;align-items:center"><UvBadge tone="primary">{{item.category}}</UvBadge><UvBadge tone="warning" pill>{{item.status}}</UvBadge></div><h1>{{item.name}}</h1><p>{{item.description}}</p><div class="demo-panel"><div class="demo-panel__header"><span>Live native Vue preview</span><span>{{item.tagName}}</span></div><ComponentDemo :name="item.name"/></div><h2>Native Vue</h2><CodeBlock :code="vueCode" language="vue"/><h2>Custom Element</h2><CodeBlock :code="elementCode" language="html"/><h2>Props</h2><div style="overflow:auto"><table class="api-table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr v-for="prop in item.props" :key="prop.name"><td><code>{{prop.name}}</code><span v-if="prop.required"> *</span></td><td><code>{{prop.type}}</code></td><td>{{prop.default??'—'}}</td><td>{{prop.description}}</td></tr></tbody></table></div><h2 v-if="item.events.length">Events</h2><div v-if="item.events.length" style="overflow:auto"><table class="api-table"><thead><tr><th>Name</th><th>Payload</th><th>Description</th></tr></thead><tbody><tr v-for="event in item.events" :key="event.name"><td><code>{{event.name}}</code></td><td><code>{{event.payload}}</code></td><td>{{event.description}}</td></tr></tbody></table></div><h2 v-if="item.slots.length">Slots</h2><ul v-if="item.slots.length"><li v-for="slot in item.slots" :key="slot.name"><code>{{slot.name}}</code> — {{slot.description}}</li></ul><h2>Accessibility</h2><ul><li v-for="note in item.accessibility" :key="note">{{note}}</li></ul><h2>Theme variables</h2><div style="overflow:auto"><table class="api-table"><thead><tr><th>Variable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr v-for="token in item.cssVariables" :key="token.name"><td><code>{{token.name}}</code></td><td><code>{{token.default}}</code></td><td>{{token.description}}</td></tr></tbody></table></div></article></div></div></template>
