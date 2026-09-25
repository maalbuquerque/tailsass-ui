import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Nav · Tailsass UI',
}

const navCode = `<nav class="nav">
  <a class="nav-brand" href="#">Brand</a>
  <span class="nav-spacer"></span>
  <a class="nav-link is-active" href="#">Docs</a>
  <a class="nav-link" href="#">Examples</a>
</nav>

<nav class="nav nav-vertical">
  <a class="nav-link is-active" href="#">Overview</a>
  <a class="nav-link" href="#">API</a>
</nav>`

export default function NavPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Nav</h1>
      <DocLead>
        Horizontal bar with spacer, or <code>nav-vertical</code> for side stacks.
      </DocLead>

      <DocH2 id="horizontal">Horizontal</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={navCode} />
      </div>
      <div className="mb-6">
        <Example>
          <nav className="nav">
            <a className="nav-brand" href="#">
              Brand
            </a>
            <span className="nav-spacer" />
            <a className="nav-link is-active" href="#">
              Docs
            </a>
            <a className="nav-link" href="#">
              Examples
            </a>
          </nav>
        </Example>
      </div>

      <DocH2 id="vertical">Vertical</DocH2>
      <div className="mb-8">
        <Example>
          <nav className="nav nav-vertical" style={{ maxWidth: '14rem' }}>
            <a className="nav-link is-active" href="#">
              Overview
            </a>
            <a className="nav-link" href="#">
              API
            </a>
          </nav>
        </Example>
      </div>
    </div>
  )
}
