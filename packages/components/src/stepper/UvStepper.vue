<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { UvStepperChangeDetail, UvStepperOrientation, UvStepperStatus, UvStepperStep, UvStepperValue } from './stepper.types'

interface Props {
  modelValue?: UvStepperValue
  steps?: UvStepperStep[]
  stepsJson?: string
  orientation?: UvStepperOrientation
  label?: string
  clickable?: boolean
  linear?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  steps: () => [], stepsJson: '', orientation: 'horizontal', label: 'Progress', clickable: true, linear: false
})
const emit = defineEmits<{
  'update:modelValue': [value: UvStepperValue]
  change: [detail: UvStepperChangeDetail]
}>()

function parseSteps(value: string): UvStepperStep[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is UvStepperStep => Boolean(item && typeof item === 'object' && 'id' in item && typeof (item as UvStepperStep).label === 'string'))
  } catch { return [] }
}

const normalizedSteps = computed(() => props.steps.length ? props.steps : parseSteps(props.stepsJson))
const internalValue = ref<UvStepperValue | undefined>(props.modelValue ?? normalizedSteps.value.find((step) => !step.disabled)?.id)
watch(() => props.modelValue, (value) => { if (value !== undefined) internalValue.value = value })
watch(normalizedSteps, (steps) => {
  if (internalValue.value === undefined) internalValue.value = steps.find((step) => !step.disabled)?.id
})
const same = (a: UvStepperValue | undefined, b: UvStepperValue) => String(a) === String(b)
const currentIndex = computed(() => Math.max(0, normalizedSteps.value.findIndex((step) => same(internalValue.value, step.id))))
const root = ref<HTMLElement>()

function statusFor(step: UvStepperStep, index: number): UvStepperStatus {
  if (step.status === 'error') return 'error'
  if (same(internalValue.value, step.id)) return 'current'
  if (step.status === 'complete' || index < currentIndex.value) return 'complete'
  return step.status ?? 'upcoming'
}
function isBlocked(step: UvStepperStep, index: number): boolean {
  return Boolean(step.disabled || !props.clickable || (props.linear && index > currentIndex.value + 1))
}
function select(step: UvStepperStep, index: number): void {
  if (isBlocked(step, index)) return
  internalValue.value = step.id
  emit('update:modelValue', step.id)
  emit('change', { value: step.id, index, step })
}
function onKeydown(event: KeyboardEvent, index: number): void {
  const vertical = props.orientation === 'vertical'
  const previousKey = vertical ? 'ArrowUp' : 'ArrowLeft'
  const nextKey = vertical ? 'ArrowDown' : 'ArrowRight'
  let target = index
  if (event.key === previousKey) target = index - 1
  else if (event.key === nextKey) target = index + 1
  else if (event.key === 'Home') target = 0
  else if (event.key === 'End') target = normalizedSteps.value.length - 1
  else return
  event.preventDefault()
  const direction = target < index ? -1 : 1
  while (target >= 0 && target < normalizedSteps.value.length && isBlocked(normalizedSteps.value[target]!, target)) target += direction
  const buttons = root.value?.querySelectorAll<HTMLButtonElement>('.uv-stepper__button')
  buttons?.[target]?.focus()
}
</script>

<template>
  <nav ref="root" class="uv-stepper" :class="`uv-stepper--${orientation}`" :aria-label="label">
    <ol class="uv-stepper__list">
      <li v-for="(step, index) in normalizedSteps" :key="String(step.id)" class="uv-stepper__item" :data-status="statusFor(step,index)">
        <button
          type="button"
          class="uv-stepper__button"
          :disabled="isBlocked(step,index)"
          :aria-current="statusFor(step,index) === 'current' ? 'step' : undefined"
          :aria-label="`${index + 1}. ${step.label}${statusFor(step,index) === 'complete' ? ', completed' : ''}`"
          @click="select(step,index)"
          @keydown="onKeydown($event,index)"
        >
          <span class="uv-stepper__marker" aria-hidden="true">{{ statusFor(step,index) === 'complete' ? '✓' : index + 1 }}</span>
          <span class="uv-stepper__copy">
            <span class="uv-stepper__label"><slot name="step" :step="step" :index="index" :status="statusFor(step,index)">{{ step.label }}</slot></span>
            <span v-if="step.description" class="uv-stepper__description">{{ step.description }}</span>
          </span>
        </button>
      </li>
    </ol>
  </nav>
</template>

<style>
.uv-stepper{color:var(--uv-color-text,#0f172a);font:inherit}.uv-stepper__list{display:flex;list-style:none;margin:0;padding:0}.uv-stepper__item{position:relative;flex:1;min-width:0}.uv-stepper__item:not(:last-child)::after{content:"";position:absolute;z-index:0;background:var(--uv-color-border,#cbd5e1)}.uv-stepper--horizontal .uv-stepper__item:not(:last-child)::after{top:1rem;left:calc(50% + 1rem);right:calc(-50% + 1rem);height:2px}.uv-stepper__button{position:relative;z-index:1;display:flex;align-items:flex-start;gap:.65rem;width:100%;padding:0 .35rem;border:0;background:transparent;color:inherit;text-align:left;font:inherit;cursor:pointer}.uv-stepper__button:disabled{cursor:default;opacity:.58}.uv-stepper__button:focus-visible{outline:2px solid var(--uv-color-primary,#2563eb);outline-offset:4px;border-radius:.4rem}.uv-stepper__marker{display:grid;place-items:center;flex:0 0 2rem;width:2rem;height:2rem;border:2px solid var(--uv-color-border,#cbd5e1);border-radius:999px;background:var(--uv-color-surface,#fff);font-size:.8rem;font-weight:750}.uv-stepper__item[data-status=current] .uv-stepper__marker{border-color:var(--uv-color-primary,#2563eb);background:var(--uv-color-primary,#2563eb);color:#fff}.uv-stepper__item[data-status=complete] .uv-stepper__marker{border-color:var(--uv-color-success,#16a34a);background:var(--uv-color-success,#16a34a);color:#fff}.uv-stepper__item[data-status=error] .uv-stepper__marker{border-color:var(--uv-color-danger,#dc2626);color:var(--uv-color-danger,#dc2626)}.uv-stepper__copy{display:grid;gap:.15rem;padding-top:.25rem;min-width:0}.uv-stepper__label{font-weight:700}.uv-stepper__description{color:var(--uv-color-muted,#64748b);font-size:.8rem}.uv-stepper--vertical .uv-stepper__list{display:grid;gap:.9rem}.uv-stepper--vertical .uv-stepper__item:not(:last-child)::after{top:2rem;bottom:-.9rem;left:1rem;width:2px}.uv-stepper--vertical .uv-stepper__button{padding:0}@media(max-width:640px){.uv-stepper--horizontal .uv-stepper__list{display:grid;gap:.8rem}.uv-stepper--horizontal .uv-stepper__item:not(:last-child)::after{top:2rem;bottom:-.8rem;left:1rem;width:2px;height:auto;right:auto}}
</style>
