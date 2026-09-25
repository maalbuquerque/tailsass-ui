import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Card · Tailsass UI',
}

const cardCode = `<div class="card card-accent">
  <div class="card-header">
    <h3 class="card-title">Project</h3>
    <p class="card-subtitle">Updated today</p>
  </div>
  <div class="card-body">
    Semantic sections for header, body, and footer.
  </div>
  <div class="card-footer">
    <button class="btn btn-sm btn-primary" type="button">Open</button>
    <button class="btn btn-sm btn-secondary" type="button">Share</button>
  </div>
</div>`

export default function CardPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Card</h1>
      <DocLead>
        Surface container with optional accent, header, body, and footer.
      </DocLead>

      <DocH2 id="structure">Structure</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={cardCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div className="card card-accent">
            <div className="card-header">
              <h3 className="card-title">Project</h3>
              <p className="card-subtitle">Updated today</p>
            </div>
            <div className="card-body">
              Semantic sections for header, body, and footer.
            </div>
            <div className="card-footer">
              <button className="btn btn-sm btn-primary" type="button">
                Open
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                Share
              </button>
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}
