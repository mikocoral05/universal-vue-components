import { readFileSync } from 'node:fs'
const source = readFileSync('packages/metadata/src/components.ts','utf8')
const expected = ['UvButton','UvIconButton','UvInput','UvTextarea','UvCheckbox','UvRadio','UvSwitch','UvBadge','UvAlert','UvSpinner','UvSelect','UvCard','UvProgress','UvAvatar','UvAccordion','UvTabs','UvBreadcrumb','UvPagination','UvDialog','UvTooltip']
const missing = expected.filter((name) => !source.includes(`name: '${name}'`))
if (missing.length) throw new Error(`Metadata missing: ${missing.join(', ')}`)
console.log(`Metadata includes all ${expected.length} foundation components.`)
