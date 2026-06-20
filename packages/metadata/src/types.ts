export interface ApiProp { name: string; type: string; default?: string; required?: boolean; description: string }
export interface ApiEvent { name: string; payload: string; description: string }
export interface ApiSlot { name: string; description: string }
export interface CssVariable { name: string; default: string; description: string }
export interface ComponentMetadata {
  name: string
  slug: string
  tagName: string
  category: 'Actions' | 'Forms' | 'Feedback' | 'Data display' | 'Navigation' | 'Overlays'
  description: string
  status: 'alpha' | 'beta' | 'stable'
  versionIntroduced: string
  accessibility: string[]
  props: ApiProp[]
  events: ApiEvent[]
  slots: ApiSlot[]
  cssVariables: CssVariable[]
}
