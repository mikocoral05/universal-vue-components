<script setup lang="ts">
import { computed } from 'vue'
import type { UvTimelineItem, UvTimelineItemDetail, UvTimelineOrientation } from './timeline.types'

interface Props {
  items?: UvTimelineItem[]
  itemsJson?: string
  orientation?: UvTimelineOrientation
  ordered?: boolean
  label?: string
  alternate?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [], itemsJson: '', orientation: 'vertical', ordered: true, label: 'Timeline', alternate: false
})
const emit = defineEmits<{ 'item-click': [detail: UvTimelineItemDetail] }>()

function parseItems(value: string): UvTimelineItem[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is UvTimelineItem => Boolean(item && typeof item === 'object' && 'id' in item && typeof (item as UvTimelineItem).title === 'string'))
  } catch { return [] }
}
const normalizedItems = computed(() => props.items.length ? props.items : parseItems(props.itemsJson))
function clickItem(item: UvTimelineItem, index: number): void { emit('item-click', { id: item.id, index, item }) }
</script>

<template>
  <component :is="ordered ? 'ol' : 'ul'" class="uv-timeline" :class="[`uv-timeline--${orientation}`, { 'uv-timeline--alternate': alternate }]" :aria-label="label">
    <li v-for="(item,index) in normalizedItems" :key="String(item.id)" class="uv-timeline__item" :data-status="item.status || 'default'">
      <span class="uv-timeline__marker" aria-hidden="true"></span>
      <article class="uv-timeline__content" :aria-current="item.current ? 'step' : undefined">
        <time v-if="item.time" class="uv-timeline__time" :datetime="item.datetime">{{ item.time }}</time>
        <a v-if="item.href" class="uv-timeline__title uv-timeline__link" :href="item.href" @click="clickItem(item,index)">
          <slot name="item" :item="item" :index="index">{{ item.title }}</slot>
        </a>
        <h3 v-else class="uv-timeline__title"><slot name="item" :item="item" :index="index">{{ item.title }}</slot></h3>
        <p v-if="item.description" class="uv-timeline__description">{{ item.description }}</p>
      </article>
    </li>
  </component>
</template>

<style>
.uv-timeline{--uv-timeline-line:var(--uv-color-border,#cbd5e1);list-style:none;margin:0;padding:0;color:var(--uv-color-text,#0f172a);font:inherit}.uv-timeline__item{position:relative;display:grid;grid-template-columns:1rem minmax(0,1fr);gap:.75rem;padding:0 0 1.25rem}.uv-timeline__item:not(:last-child)::before{content:"";position:absolute;top:1rem;bottom:0;left:.4375rem;width:2px;background:var(--uv-timeline-line)}.uv-timeline__marker{position:relative;z-index:1;width:.9rem;height:.9rem;margin-top:.25rem;border:3px solid var(--uv-color-surface,#fff);border-radius:999px;background:var(--uv-color-muted,#64748b);box-shadow:0 0 0 1px var(--uv-timeline-line)}.uv-timeline__item[data-status=info] .uv-timeline__marker{background:var(--uv-color-primary,#2563eb)}.uv-timeline__item[data-status=success] .uv-timeline__marker{background:var(--uv-color-success,#16a34a)}.uv-timeline__item[data-status=warning] .uv-timeline__marker{background:var(--uv-color-warning,#d97706)}.uv-timeline__item[data-status=danger] .uv-timeline__marker{background:var(--uv-color-danger,#dc2626)}.uv-timeline__content{display:grid;gap:.25rem;min-width:0}.uv-timeline__content[aria-current=step]{padding:.65rem;border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-subtle,#f8fafc)}.uv-timeline__time{color:var(--uv-color-muted,#64748b);font-size:.78rem}.uv-timeline__title{margin:0;font-size:.95rem;font-weight:750}.uv-timeline__link{color:var(--uv-color-primary,#2563eb);text-decoration:none}.uv-timeline__link:hover{text-decoration:underline}.uv-timeline__description{margin:0;color:var(--uv-color-muted,#64748b);font-size:.86rem;line-height:1.45}.uv-timeline--horizontal{display:flex;overflow-x:auto}.uv-timeline--horizontal .uv-timeline__item{grid-template-columns:1fr;grid-template-rows:1rem auto;flex:1 0 12rem;padding:0 1rem 0 0}.uv-timeline--horizontal .uv-timeline__item:not(:last-child)::before{top:.4375rem;left:.9rem;right:0;bottom:auto;width:auto;height:2px}.uv-timeline--alternate .uv-timeline__item:nth-child(even) .uv-timeline__content{margin-inline-start:1rem}
</style>
