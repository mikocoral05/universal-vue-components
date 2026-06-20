<script setup lang="ts">
useHead({ titleTemplate: (title)=>title?`${title} · Universal Vue Components`:'Universal Vue Components' })
</script>
<template><div class="site-shell"><SiteHeader/><main id="main-content"><NuxtPage/></main><SiteFooter/><SearchDialog/></div></template>
