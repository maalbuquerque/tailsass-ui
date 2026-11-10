import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Tabs · Tailsass UI',
}

const tabsCode = `<div class="tabs">
  <div class="tabs-list" role="tablist">
    <button type="button" class="tabs-tab is-active" role="tab" aria-selected="true">
      Overview
    </button>
    <button type="button" class="tabs-tab" role="tab" aria-selected="false">
      Details
    </button>
  </div>
  <div class="tabs-panel" role="tabpanel">
    Panel content
  </div>
</div>`

const pillsCode = `<div class="tabs tabs-pills">
  <div class="tabs-list" role="tablist">
    <button type="button" class="tabs-tab is-active" role="tab">Users</button>
    <button type="button" class="tabs-tab" role="tab">Thresholds</button>
  </div>
</div>`

export default function TabsPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Tabs</h1>
      <DocLead>
        Underline tabs by default. Use <code>tabs-pills</code> for a softer control strip. Mark the
        active item with <code>is-active</code> or <code>aria-selected=&quot;true&quot;</code>.
      </DocLead>

      <DocH2 id="underline">Underline</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={tabsCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="tabs">
            <div className="tabs-list" role="tablist">
              <button
                type="button"
                className="tabs-tab is-active"
                role="tab"
                aria-selected="true"
              >
                Overview
              </button>
              <button type="button" className="tabs-tab" role="tab" aria-selected="false">
                Details
              </button>
            </div>
            <div className="tabs-panel" role="tabpanel">
              Panel content
            </div>
          </div>
        </Example>
      </div>

      <DocH2 id="pills">Pills</DocH2>
      <DocP>
        <code>tabs tabs-pills</code>
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={pillsCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div className="tabs tabs-pills">
            <div className="tabs-list" role="tablist">
              <button type="button" className="tabs-tab is-active" role="tab">
                Users
              </button>
              <button type="button" className="tabs-tab" role="tab">
                Thresholds
              </button>
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}
