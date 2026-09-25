import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Dropdown · Tailsass UI',
}

const dropdownCode = `<div class="dropdown">
  <button class="btn btn-md btn-secondary dropdown-trigger" type="button">
    Actions
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Edit</button>
    <button class="dropdown-item" type="button">Duplicate</button>
    <hr class="dropdown-divider" />
    <button class="dropdown-item dropdown-item-danger" type="button">Delete</button>
  </div>
</div>`

export default function DropdownPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Dropdown</h1>
      <DocLead>
        Opens on focus-within (tab into the menu) or with <code>is-open</code> on the root.
      </DocLead>

      <DocH2 id="basic">Basic</DocH2>
      <DocP>
        Use <code>dropdown-menu-right</code> / <code>dropdown-menu-left</code> to align the panel.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={dropdownCode} />
      </div>
      <div className="mb-8">
        <Example title="Tab into the trigger to open">
          <div className="dropdown">
            <button className="btn btn-md btn-secondary dropdown-trigger" type="button">
              Actions
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button">
                Edit
              </button>
              <button className="dropdown-item" type="button">
                Duplicate
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item dropdown-item-danger" type="button">
                Delete
              </button>
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}
