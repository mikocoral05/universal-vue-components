export type UvTreeNodeId = string | number
export interface UvTreeNode { id: UvTreeNodeId; label: string; children?: UvTreeNode[]; disabled?: boolean }
export interface UvTreeSelectionDetail { id: UvTreeNodeId; node: UvTreeNode }
export interface UvTreeToggleDetail extends UvTreeSelectionDetail { expanded: boolean }
