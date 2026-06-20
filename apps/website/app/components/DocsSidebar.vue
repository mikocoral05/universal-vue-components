<script setup lang="ts">const links=[['Overview','/docs'],['Installation','/docs/installation'],['Native Vue','/docs/vue'],['Web Components','/docs/web-components'],['CDN','/docs/cdn']]</script>
<template><aside class="docs-sidebar"><strong>Documentation</strong><nav><NuxtLink v-for="[label,to] in links" :key="to" :to="to">{{label}}</NuxtLink></nav></aside></template>
