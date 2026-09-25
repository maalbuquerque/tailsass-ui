export type NavItem = {
  label: string
  href: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: 'Start',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Getting started', href: '/docs/getting-started' },
      { label: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Button', href: '/docs/button' },
      { label: 'Form', href: '/docs/form' },
      { label: 'Card', href: '/docs/card' },
      { label: 'Dropdown', href: '/docs/dropdown' },
      { label: 'Nav', href: '/docs/nav' },
      { label: 'Modal', href: '/docs/modal' },
      { label: 'Popover', href: '/docs/popover' },
      { label: 'Tooltip', href: '/docs/tooltip' },
      { label: 'Toast', href: '/docs/toast' },
      { label: 'Table', href: '/docs/table' },
      { label: 'Typography', href: '/docs/typography' },
    ],
  },
]
