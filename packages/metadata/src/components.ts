import type { ComponentMetadata } from './types'

const baseCss = [
  { name: '--uv-color-primary', default: '#2563eb', description: 'Primary interactive color.' },
  { name: '--uv-radius-md', default: '.625rem', description: 'Default control radius.' }
]

export const components: ComponentMetadata[] = [
  {
    name: 'UvButton', slug: 'button', tagName: 'uv-button', category: 'Actions', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Accessible action button with variants, sizes, loading state, and native form behavior.',
    accessibility: ['Uses a native button element.', 'Loading state exposes aria-busy.', 'Disabled state blocks interaction.'],
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", default: "'primary'", description: 'Visual style.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Control size.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner and blocks interaction.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' }
    ], events: [{ name: 'click', payload: 'MouseEvent', description: 'Emitted after an enabled click.' }],
    slots: [{ name: 'default', description: 'Button label.' }, { name: 'leading', description: 'Leading icon or content.' }, { name: 'trailing', description: 'Trailing icon or content.' }], cssVariables: baseCss
  },
  {
    name: 'UvIconButton', slug: 'icon-button', tagName: 'uv-icon-button', category: 'Actions', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Square icon-only action with a required accessible label.',
    accessibility: ['Requires an aria-label through the label prop.', 'Uses a native button element.'],
    props: [
      { name: 'label', type: 'string', required: true, description: 'Accessible button name.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", default: "'ghost'", description: 'Visual style.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading state.' }
    ], events: [{ name: 'click', payload: 'MouseEvent', description: 'Emitted after an enabled click.' }], slots: [{ name: 'default', description: 'Icon content.' }], cssVariables: baseCss
  },
  {
    name: 'UvInput', slug: 'input', tagName: 'uv-input', category: 'Forms', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Labeled text input with hint, error, clear action, and v-model support.',
    accessibility: ['Associates label, hint, and error text with the input.', 'Exposes invalid state with aria-invalid.'],
    props: [
      { name: 'modelValue', type: 'string | number', default: "''", description: 'Current value.' },
      { name: 'label', type: 'string', description: 'Visible label.' },
      { name: 'type', type: 'string', default: "'text'", description: 'Native input type.' },
      { name: 'error', type: 'string', description: 'Validation message.' },
      { name: 'clearable', type: 'boolean', default: 'false', description: 'Shows a clear button when populated.' }
    ], events: [
      { name: 'update:modelValue', payload: 'string', description: 'v-model update.' },
      { name: 'change', payload: 'Event', description: 'Native change event.' },
      { name: 'clear', payload: 'void', description: 'Emitted after clearing.' }
    ], slots: [{ name: 'prefix', description: 'Content before the input.' }, { name: 'suffix', description: 'Content after the input.' }], cssVariables: baseCss
  },
  {
    name: 'UvTextarea', slug: 'textarea', tagName: 'uv-textarea', category: 'Forms', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Multiline form control with automatic labeling, errors, and optional character count.',
    accessibility: ['Associates supporting text through aria-describedby.', 'Uses native textarea semantics.'],
    props: [
      { name: 'modelValue', type: 'string', default: "''", description: 'Current text.' },
      { name: 'rows', type: 'number', default: '4', description: 'Visible text rows.' },
      { name: 'maxlength', type: 'number', description: 'Maximum character count.' },
      { name: 'showCount', type: 'boolean', default: 'false', description: 'Displays current character count.' }
    ], events: [{ name: 'update:modelValue', payload: 'string', description: 'v-model update.' }], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvCheckbox', slug: 'checkbox', tagName: 'uv-checkbox', category: 'Forms', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Native checkbox with label, description, and indeterminate state.',
    accessibility: ['Uses a native checkbox.', 'Label wraps the control for a generous click target.'],
    props: [
      { name: 'modelValue', type: 'boolean', default: 'false', description: 'Checked state.' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Mixed state.' },
      { name: 'label', type: 'string', description: 'Visible label.' }
    ], events: [{ name: 'update:modelValue', payload: 'boolean', description: 'Checked-state update.' }], slots: [{ name: 'default', description: 'Custom label.' }], cssVariables: baseCss
  },
  {
    name: 'UvRadio', slug: 'radio', tagName: 'uv-radio', category: 'Forms', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Native radio option for string, number, or boolean values.',
    accessibility: ['Uses a native radio input.', 'Supports shared native name grouping.'],
    props: [
      { name: 'modelValue', type: 'string | number | boolean | null', description: 'Selected group value.' },
      { name: 'value', type: 'string | number | boolean', required: true, description: 'Value represented by this option.' },
      { name: 'label', type: 'string', description: 'Visible label.' }
    ], events: [{ name: 'update:modelValue', payload: 'string | number | boolean', description: 'Selected value update.' }], slots: [{ name: 'default', description: 'Custom label.' }], cssVariables: baseCss
  },
  {
    name: 'UvSwitch', slug: 'switch', tagName: 'uv-switch', category: 'Forms', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Boolean switch built on a native checkbox with switch semantics.',
    accessibility: ['Uses role=switch and aria-checked.', 'Space toggles through native checkbox behavior.'],
    props: [{ name: 'modelValue', type: 'boolean', default: 'false', description: 'Current state.' }, { name: 'label', type: 'string', description: 'Visible label.' }],
    events: [{ name: 'update:modelValue', payload: 'boolean', description: 'State update.' }], slots: [{ name: 'default', description: 'Custom label.' }], cssVariables: baseCss
  },
  {
    name: 'UvBadge', slug: 'badge', tagName: 'uv-badge', category: 'Data display', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Compact status and category label.', accessibility: ['Renders non-interactive semantic inline content.'],
    props: [{ name: 'tone', type: "'neutral' | 'primary' | 'success' | 'warning' | 'danger'", default: "'neutral'", description: 'Semantic color.' }, { name: 'pill', type: 'boolean', default: 'false', description: 'Uses fully rounded corners.' }],
    events: [], slots: [{ name: 'default', description: 'Badge content.' }], cssVariables: baseCss
  },
  {
    name: 'UvAlert', slug: 'alert', tagName: 'uv-alert', category: 'Feedback', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Semantic feedback message with optional title and dismiss action.',
    accessibility: ['Uses alert for urgent errors and status for other tones.', 'Dismiss control has an accessible label.'],
    props: [{ name: 'tone', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Semantic tone.' }, { name: 'title', type: 'string', description: 'Alert heading.' }, { name: 'dismissible', type: 'boolean', default: 'false', description: 'Shows dismiss action.' }],
    events: [{ name: 'dismiss', payload: 'void', description: 'Emitted by dismiss action.' }], slots: [{ name: 'default', description: 'Alert body.' }, { name: 'icon', description: 'Custom icon.' }], cssVariables: baseCss
  },
  {
    name: 'UvSpinner', slug: 'spinner', tagName: 'uv-spinner', category: 'Feedback', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Animated loading indicator with reduced-motion support.',
    accessibility: ['Uses role=status.', 'Provides a configurable screen-reader label.'],
    props: [{ name: 'size', type: 'string | number', default: '24', description: 'Rendered size.' }, { name: 'label', type: 'string', default: "'Loading'", description: 'Screen-reader status text.' }],
    events: [], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvSelect', slug: 'select', tagName: 'uv-select', category: 'Forms', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Native select field with typed options, labels, hints, and validation.',
    accessibility: ['Uses a native select element.', 'Associates label and supporting messages.'],
    props: [{ name: 'modelValue', type: 'string | number', description: 'Selected value.' }, { name: 'options', type: 'UvSelectOption[]', default: '[]', description: 'Available options.' }, { name: 'label', type: 'string', description: 'Visible label.' }],
    events: [{ name: 'update:modelValue', payload: 'string', description: 'Selected-value update.' }], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvCard', slug: 'card', tagName: 'uv-card', category: 'Data display', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Structured surface with header, body, footer, padding, and elevation variants.',
    accessibility: ['Renders a semantic section element.'],
    props: [{ name: 'variant', type: "'elevated' | 'outlined' | 'flat'", default: "'outlined'", description: 'Surface style.' }, { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Body spacing.' }],
    events: [], slots: [{ name: 'header', description: 'Header content.' }, { name: 'default', description: 'Card body.' }, { name: 'footer', description: 'Footer content.' }], cssVariables: baseCss
  },
  {
    name: 'UvProgress', slug: 'progress', tagName: 'uv-progress', category: 'Feedback', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Native progress indicator with semantic tones and optional value label.',
    accessibility: ['Uses the native progress element.', 'Exposes current and maximum values to assistive technology.'],
    props: [{ name: 'value', type: 'number', default: '0', description: 'Current value.' }, { name: 'max', type: 'number', default: '100', description: 'Maximum value.' }, { name: 'showValue', type: 'boolean', default: 'false', description: 'Displays a percentage label.' }],
    events: [], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvAvatar', slug: 'avatar', tagName: 'uv-avatar', category: 'Data display', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Image avatar with initials fallback, sizing, and shape options.',
    accessibility: ['Uses image alt text when an image is present.', 'Announces the supplied name for fallback initials.'],
    props: [{ name: 'src', type: 'string', description: 'Image URL.' }, { name: 'name', type: 'string', description: 'Name used for fallback initials.' }, { name: 'size', type: 'string | number', default: '40', description: 'Avatar dimension.' }],
    events: [], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvAccordion', slug: 'accordion', tagName: 'uv-accordion', category: 'Data display', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Disclosure panel built on native details and summary semantics.',
    accessibility: ['Uses native details and summary keyboard behavior.', 'Exposes open state to the browser accessibility tree.'],
    props: [{ name: 'open', type: 'boolean', default: 'false', description: 'Expanded state.' }, { name: 'title', type: 'string', description: 'Summary label.' }],
    events: [{ name: 'update:open', payload: 'boolean', description: 'Expanded-state update.' }, { name: 'toggle', payload: 'boolean', description: 'Emitted whenever the panel toggles.' }], slots: [{ name: 'title', description: 'Custom summary.' }, { name: 'default', description: 'Panel content.' }], cssVariables: baseCss
  },
  {
    name: 'UvTabs', slug: 'tabs', tagName: 'uv-tabs', category: 'Navigation', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Controlled tab list with arrow, Home, and End key navigation.',
    accessibility: ['Uses tablist, tab, and tabpanel roles.', 'Implements roving tabindex and expected arrow-key behavior.'],
    props: [{ name: 'modelValue', type: 'string', description: 'Active tab id.' }, { name: 'tabs', type: 'UvTabItem[]', required: true, description: 'Tab definitions.' }],
    events: [{ name: 'update:modelValue', payload: 'string', description: 'Active-tab update.' }], slots: [{ name: 'default', description: 'Panel content with active slot prop.' }], cssVariables: baseCss
  },
  {
    name: 'UvBreadcrumb', slug: 'breadcrumb', tagName: 'uv-breadcrumb', category: 'Navigation', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Semantic breadcrumb trail with a current-page marker.',
    accessibility: ['Uses a labeled navigation landmark.', 'Marks the final item with aria-current=page.'],
    props: [{ name: 'items', type: 'UvBreadcrumbItem[]', required: true, description: 'Breadcrumb entries.' }, { name: 'separator', type: 'string', default: "'/'", description: 'Visual separator.' }],
    events: [], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvPagination', slug: 'pagination', tagName: 'uv-pagination', category: 'Navigation', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Controlled page navigation with previous, next, and visible page buttons.',
    accessibility: ['Uses a labeled navigation landmark.', 'Marks the active page with aria-current.'],
    props: [{ name: 'modelValue', type: 'number', default: '1', description: 'Current page.' }, { name: 'totalPages', type: 'number', required: true, description: 'Total page count.' }],
    events: [{ name: 'update:modelValue', payload: 'number', description: 'Current-page update.' }], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvDialog', slug: 'dialog', tagName: 'uv-dialog', category: 'Overlays', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Modal dialog with focus management, Escape handling, and backdrop dismissal.',
    accessibility: ['Uses role=dialog and aria-modal.', 'Moves focus inside, traps Tab, and restores focus on close.'],
    props: [{ name: 'modelValue', type: 'boolean', default: 'false', description: 'Open state.' }, { name: 'title', type: 'string', description: 'Accessible dialog title.' }, { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Allows Escape dismissal.' }],
    events: [{ name: 'update:modelValue', payload: 'boolean', description: 'Open-state update.' }, { name: 'close', payload: 'void', description: 'Emitted after dismissal.' }], slots: [{ name: 'default', description: 'Dialog body.' }, { name: 'footer', description: 'Actions with close slot prop.' }], cssVariables: baseCss
  },
  {
    name: 'UvTooltip', slug: 'tooltip', tagName: 'uv-tooltip', category: 'Overlays', status: 'alpha', versionIntroduced: '0.1.0-alpha.1',
    description: 'Hover and focus tooltip with four placement options.',
    accessibility: ['Uses role=tooltip.', 'Connects the trigger with aria-describedby.'],
    props: [{ name: 'text', type: 'string', required: true, description: 'Tooltip text.' }, { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Preferred placement.' }],
    events: [], slots: [{ name: 'default', description: 'Tooltip trigger.' }], cssVariables: baseCss
  },
  {
    name: 'UvDivider', slug: 'divider', tagName: 'uv-divider', category: 'Data display', status: 'alpha', versionIntroduced: '0.2.0-alpha.1',
    description: 'Semantic horizontal or vertical separator with optional inset and text label.',
    accessibility: ['Uses separator semantics and exposes orientation.', 'Supports a decorative mode that is hidden from assistive technology.'],
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Divider direction.' },
      { name: 'label', type: 'string', description: 'Optional horizontal divider label.' },
      { name: 'inset', type: 'boolean', default: 'false', description: 'Adds surrounding inset space.' },
      { name: 'decorative', type: 'boolean', default: 'false', description: 'Removes semantic separator meaning.' }
    ], events: [], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvSkeleton', slug: 'skeleton', tagName: 'uv-skeleton', category: 'Feedback', status: 'alpha', versionIntroduced: '0.2.0-alpha.1',
    description: 'Responsive loading placeholder with text, rectangular, and circular variants.',
    accessibility: ['Announces a configurable loading status.', 'Respects reduced-motion preferences.'],
    props: [
      { name: 'variant', type: "'text' | 'rectangular' | 'circular'", default: "'text'", description: 'Placeholder shape.' },
      { name: 'width', type: 'string | number', default: "'100%'", description: 'Rendered width.' },
      { name: 'height', type: 'string | number', description: 'Rendered height.' },
      { name: 'lines', type: 'number', default: '1', description: 'Number of text placeholders.' },
      { name: 'animated', type: 'boolean', default: 'true', description: 'Enables the shimmer animation.' },
      { name: 'label', type: 'string', default: "'Loading content'", description: 'Screen-reader status text.' }
    ], events: [], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvSlider', slug: 'slider', tagName: 'uv-slider', category: 'Forms', status: 'alpha', versionIntroduced: '0.2.0-alpha.1',
    description: 'Accessible native range slider with labels, hints, formatted values, and size variants.',
    accessibility: ['Uses a native range input and keyboard behavior.', 'Associates labels and hints and can expose formatted value text.'],
    props: [
      { name: 'modelValue', type: 'number', default: '0', description: 'Current numeric value.' },
      { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'step', type: 'number', default: '1', description: 'Allowed value increment.' },
      { name: 'label', type: 'string', description: 'Visible field label.' },
      { name: 'showValue', type: 'boolean', default: 'false', description: 'Displays the current value.' },
      { name: 'valueSuffix', type: 'string', description: 'Suffix used for visible and accessible formatted values.' }
    ],
    events: [
      { name: 'update:modelValue', payload: 'number', description: 'Current-value update.' },
      { name: 'input', payload: '[number, Event]', description: 'Emitted during interaction.' },
      { name: 'change', payload: '[number, Event]', description: 'Emitted when the value is committed.' }
    ], slots: [], cssVariables: baseCss
  },
  {
    name: 'UvPopover', slug: 'popover', tagName: 'uv-popover', category: 'Overlays', status: 'alpha', versionIntroduced: '0.2.0-alpha.1',
    description: 'Controlled non-modal popover with accessible trigger, placement, Escape, and outside-click behavior.',
    accessibility: ['Trigger exposes aria-haspopup and expanded state.', 'Escape closes the panel and returns focus to the trigger.'],
    props: [
      { name: 'modelValue', type: 'boolean', default: 'false', description: 'Open state.' },
      { name: 'triggerLabel', type: 'string', default: "'Open popover'", description: 'Fallback trigger label.' },
      { name: 'ariaLabel', type: 'string', default: "'Popover'", description: 'Accessible name for the panel.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Preferred panel placement.' },
      { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Allows Escape dismissal.' },
      { name: 'closeOnOutside', type: 'boolean', default: 'true', description: 'Allows outside-pointer dismissal.' }
    ],
    events: [
      { name: 'update:modelValue', payload: 'boolean', description: 'Open-state update.' },
      { name: 'open', payload: 'void', description: 'Emitted when opening is requested.' },
      { name: 'close', payload: 'void', description: 'Emitted when closing is requested.' }
    ],
    slots: [{ name: 'trigger', description: 'Trigger content.' }, { name: 'default', description: 'Popover content with a close slot prop.' }], cssVariables: baseCss
  },
  {
    name: 'UvDropdownMenu', slug: 'dropdown-menu', tagName: 'uv-dropdown-menu', category: 'Overlays', status: 'alpha', versionIntroduced: '0.2.0-alpha.1',
    description: 'Framework-neutral action menu with slotted items, keyboard navigation, and four aligned placements.',
    accessibility: ['Uses menu and menuitem semantics.', 'Supports Arrow keys, Home, End, Escape, and focus restoration.'],
    props: [
      { name: 'modelValue', type: 'boolean', default: 'false', description: 'Open state.' },
      { name: 'label', type: 'string', default: "'Menu'", description: 'Fallback trigger label.' },
      { name: 'placement', type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'", default: "'bottom-start'", description: 'Menu alignment.' },
      { name: 'closeOnSelect', type: 'boolean', default: 'true', description: 'Closes after a menu item is selected.' },
      { name: 'ariaLabel', type: 'string', default: "'Actions'", description: 'Accessible menu name.' }
    ],
    events: [
      { name: 'update:modelValue', payload: 'boolean', description: 'Open-state update.' },
      { name: 'select', payload: 'Event', description: 'Emitted after an item is selected.' }
    ],
    slots: [{ name: 'trigger', description: 'Trigger content.' }, { name: 'default', description: 'Buttons, links, or elements with role=menuitem.' }], cssVariables: baseCss
  }

]

export const componentBySlug = Object.fromEntries(components.map((component) => [component.slug, component])) as Record<string, ComponentMetadata>
