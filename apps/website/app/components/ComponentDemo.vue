<script setup lang="ts">
import {
  UvAccordion, UvAlert, UvAvatar, UvBadge, UvBreadcrumb, UvButton, UvCard, UvCheckbox,
  UvDialog, UvDivider, UvDropdownMenu, UvIconButton, UvInput, UvPagination, UvPopover,
  UvProgress, UvRadio, UvSelect, UvSkeleton, UvSlider, UvSpinner, UvSwitch, UvTabs,
  UvTextarea, UvTooltip
} from '@universal-vue/vue'
import { UvIcon } from '@universal-vue/icons'

const props = defineProps<{ name: string }>()
const text = ref('Hello Vue')
const longText = ref('Build once, use everywhere.')
const checked = ref(true)
const radio = ref('vue')
const enabled = ref(true)
const alertVisible = ref(true)
const selectValue = ref('vue')
const activeTab = ref('overview')
const page = ref(2)
const dialogOpen = ref(false)
const sliderValue = ref(64)
const popoverOpen = ref(false)
const menuOpen = ref(false)
const selectOptions = [
  { label: 'Vue', value: 'vue' },
  { label: 'React through Custom Elements', value: 'react' },
  { label: 'Angular', value: 'angular' }
]
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'api', label: 'API' },
  { id: 'accessibility', label: 'Accessibility' }
]
const crumbs = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Current' }
]
</script>

<template>
  <div class="component-demo">
    <template v-if="props.name === 'UvButton'">
      <UvButton>Save changes</UvButton><UvButton variant="outline">Cancel</UvButton><UvButton variant="danger">Delete</UvButton><UvButton loading>Saving</UvButton>
    </template>
    <template v-else-if="props.name === 'UvIconButton'">
      <UvIconButton label="Search"><UvIcon name="search" /></UvIconButton><UvIconButton label="Continue" variant="primary"><UvIcon name="arrowRight" /></UvIconButton>
    </template>
    <template v-else-if="props.name === 'UvInput'">
      <UvInput v-model="text" label="Project name" hint="Choose a clear public name" clearable />
    </template>
    <template v-else-if="props.name === 'UvTextarea'">
      <UvTextarea v-model="longText" label="Description" :maxlength="120" show-count />
    </template>
    <template v-else-if="props.name === 'UvCheckbox'">
      <UvCheckbox v-model="checked" label="Accept contribution guidelines" description="Required before opening a pull request" />
    </template>
    <template v-else-if="props.name === 'UvRadio'">
      <div class="demo-stack"><UvRadio v-model="radio" name="framework" value="vue" label="Vue" /><UvRadio v-model="radio" name="framework" value="react" label="React through Custom Elements" /></div>
    </template>
    <template v-else-if="props.name === 'UvSwitch'">
      <UvSwitch v-model="enabled" label="Enable notifications" description="Receive project release updates" />
    </template>
    <template v-else-if="props.name === 'UvBadge'">
      <UvBadge tone="primary">Alpha</UvBadge><UvBadge tone="success" pill dot>Accessible</UvBadge><UvBadge tone="warning">In progress</UvBadge>
    </template>
    <template v-else-if="props.name === 'UvAlert'">
      <UvAlert v-if="alertVisible" tone="success" title="Package ready" dismissible @dismiss="alertVisible = false">The component build completed successfully.</UvAlert><UvButton v-else size="sm" variant="outline" @click="alertVisible = true">Show alert again</UvButton>
    </template>
    <template v-else-if="props.name === 'UvSpinner'">
      <UvSpinner :size="32" label="Loading preview" />
    </template>
    <template v-else-if="props.name === 'UvSelect'">
      <UvSelect v-model="selectValue" label="Framework" :options="selectOptions" />
    </template>
    <template v-else-if="props.name === 'UvCard'">
      <UvCard style="width:min(100%,420px)" variant="elevated"><template #header><strong>Universal component</strong></template><p>One source powers native Vue and Custom Element packages.</p><template #footer><UvButton size="sm">View details</UvButton></template></UvCard>
    </template>
    <template v-else-if="props.name === 'UvProgress'">
      <UvProgress style="width:min(100%,460px)" :value="72" label="Release readiness" show-value />
    </template>
    <template v-else-if="props.name === 'UvAvatar'">
      <UvAvatar name="Michael Angelo" :size="56" /><UvAvatar name="Universal Vue" shape="rounded" :size="56" />
    </template>
    <template v-else-if="props.name === 'UvAccordion'">
      <UvAccordion style="width:min(100%,520px)" title="Why Custom Elements?">They work in React, Angular, Svelte, Laravel, WordPress, and plain HTML.</UvAccordion>
    </template>
    <template v-else-if="props.name === 'UvTabs'">
      <UvTabs v-model="activeTab" style="width:min(100%,560px)" :tabs="tabs"><template #default="{ active }"><p>Active panel: <strong>{{ active }}</strong></p></template></UvTabs>
    </template>
    <template v-else-if="props.name === 'UvBreadcrumb'">
      <UvBreadcrumb :items="crumbs" />
    </template>
    <template v-else-if="props.name === 'UvPagination'">
      <UvPagination v-model="page" :total-pages="8" />
    </template>
    <template v-else-if="props.name === 'UvDialog'">
      <UvButton @click="dialogOpen = true">Open dialog</UvButton><UvDialog v-model="dialogOpen" title="Publish package" description="Review the package before publication."><p>This dialog traps keyboard focus and closes with Escape.</p><template #footer="{ close }"><UvButton variant="outline" @click="close">Cancel</UvButton><UvButton @click="close">Publish</UvButton></template></UvDialog>
    </template>
    <template v-else-if="props.name === 'UvTooltip'">
      <UvTooltip text="Search documentation"><UvIconButton label="Search documentation"><UvIcon name="search" /></UvIconButton></UvTooltip>
    </template>
    <template v-else-if="props.name === 'UvDivider'">
      <div class="demo-stack" style="width:min(100%,520px)"><p style="margin:0">Foundation components</p><UvDivider label="New in the expansion batch" /><p style="margin:0">Universal distribution targets</p></div>
    </template>
    <template v-else-if="props.name === 'UvSkeleton'">
      <div style="display:grid;grid-template-columns:auto 1fr;gap:1rem;width:min(100%,520px);align-items:start"><UvSkeleton variant="circular" :width="52" /><UvSkeleton :lines="3" /></div>
    </template>
    <template v-else-if="props.name === 'UvSlider'">
      <UvSlider v-model="sliderValue" style="width:min(100%,520px)" label="Coverage" value-suffix="%" show-value hint="Use the arrow keys for precise changes." />
    </template>
    <template v-else-if="props.name === 'UvPopover'">
      <UvPopover v-model="popoverOpen" trigger-label="Why universal?"><template #trigger>Why universal?</template><strong>One component source</strong><p style="margin:.4rem 0 0">Ship native Vue, Custom Elements, and CDN bundles together.</p></UvPopover>
    </template>
    <template v-else-if="props.name === 'UvDropdownMenu'">
      <UvDropdownMenu v-model="menuOpen" label="Project actions" aria-label="Project actions"><button role="menuitem" type="button">View documentation</button><button role="menuitem" type="button">Copy install command</button><button role="menuitem" type="button">Open repository</button></UvDropdownMenu>
    </template>
  </div>
</template>
