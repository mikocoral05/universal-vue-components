<script setup lang="ts">
import { components } from '@universal-vue/metadata'
import { UvIcon } from '@universal-vue/icons'
const {open,hide}=useSearch();const query=ref('');const router=useRouter()
const docs=[{name:'Installation',description:'Install the packages',path:'/docs/installation'},{name:'Native Vue',description:'Vue and Nuxt usage',path:'/docs/vue'},{name:'Web Components',description:'Use in any framework',path:'/docs/web-components'},{name:'CDN',description:'No-build browser setup',path:'/docs/cdn'}]
const results=computed(()=>{const q=query.value.trim().toLowerCase();const items=[...components.map(c=>({name:c.name,description:c.description,path:`/components/${c.slug}`})),...docs];return q?items.filter(i=>`${i.name} ${i.description}`.toLowerCase().includes(q)):items.slice(0,8)})
function go(path:string){hide();query.value='';router.push(path)}
function onKey(event:KeyboardEvent){if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();open.value=true}if(event.key==='Escape')hide()}
onMounted(()=>window.addEventListener('keydown',onKey));onBeforeUnmount(()=>window.removeEventListener('keydown',onKey))
</script>
<template><Teleport to="body"><div v-if="open" class="search-overlay" role="presentation" @mousedown.self="hide"><section class="search-dialog" role="dialog" aria-modal="true" aria-label="Search documentation"><div class="search-input"><UvIcon name="search"/><input v-model="query" autofocus placeholder="Search components and documentation" aria-label="Search query"><button type="button" @click="hide">Esc</button></div><div class="search-results"><button v-for="item in results" :key="item.path" type="button" @click="go(item.path)"><strong>{{item.name}}</strong><span>{{item.description}}</span></button><p v-if="!results.length">No results found.</p></div></section></div></Teleport></template>
