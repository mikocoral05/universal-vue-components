<script setup lang="ts">
import { UvIcon } from '@universal-vue/icons'

const route = useRoute()
const { toggle, theme } = useTheme()
const { show } = useSearch()
const mobileOpen = ref(false)

watch(() => route.fullPath, () => {
  mobileOpen.value = false
})

const links = [
  { label: 'Components', to: '/components' },
  { label: 'Docs', to: '/docs' },
  { label: 'Playground', to: '/playground' },
  { label: 'Community', to: '/community' }
] as const
</script>

<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="site-container header-inner">
      <NuxtLink class="brand" to="/" aria-label="Universal Vue Components home">
        <span class="brand-mark">V</span>
        <span>Universal Vue</span>
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Primary">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ active: route.path.startsWith(link.to) }"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <button class="search-trigger" type="button" aria-label="Search documentation" @click="show">
          <UvIcon name="search" :size="17" />
          <span>Search</span>
          <kbd>⌘ K</kbd>
        </button>
        <button
          class="icon-control"
          type="button"
          :aria-label="`Use ${theme === 'light' ? 'dark' : 'light'} theme`"
          @click="toggle"
        >
          <UvIcon :name="theme === 'light' ? 'moon' : 'sun'" />
        </button>
        <a
          class="github-link"
          href="https://github.com/universal-vue/universal-vue-components"
          aria-label="GitHub repository"
        >GitHub</a>
        <button
          class="mobile-menu"
          type="button"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          ☰
        </button>
      </div>
    </div>

    <nav v-if="mobileOpen" class="mobile-nav site-container" aria-label="Mobile">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
