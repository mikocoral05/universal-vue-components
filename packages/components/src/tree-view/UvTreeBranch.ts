import { defineComponent, h } from 'vue'
import type { Component, PropType } from 'vue'
import type { UvTreeNode, UvTreeNodeId } from './tree-view.types'

export const UvTreeBranch: Component = defineComponent({
  name: 'UvTreeBranch',
  props: {
    nodes: { type: Array as PropType<UvTreeNode[]>, required: true },
    selected: { type: [String, Number] as PropType<UvTreeNodeId | null>, default: null }
  },
  emits: ['select', 'toggle'],
  setup(props, { emit }) {
    return () => h('ul', { role: 'group', class: 'uv-tree__group' }, props.nodes.map((node) => h('li', {
      role: 'treeitem',
      'aria-selected': props.selected === node.id,
      'aria-disabled': node.disabled || undefined
    }, [
      h('button', { type: 'button', disabled: node.disabled, onClick: () => emit('select', node) }, node.label),
      node.children?.length
        ? h(UvTreeBranch, {
            nodes: node.children,
            selected: props.selected,
            onSelect: (selectedNode: UvTreeNode) => emit('select', selectedNode),
            onToggle: (selectedNode: UvTreeNode) => emit('toggle', selectedNode)
          })
        : null
    ])))
  }
})
