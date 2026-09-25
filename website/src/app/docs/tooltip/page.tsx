import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Tooltip · Tailsass UI',
}

const tooltipCode = `<span class="tooltip">
  <button class="btn btn-md btn-secondary" type="button">Hover me</button>
  <span class="tooltip-content">Helpful hint</span>
</span>`

export default function TooltipPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Tooltip</h1>
      <DocLead>Shows on hover and focus-within of the wrapper.</DocLead>

      <DocH2 id="basic">Basic</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={tooltipCode} />
      </div>
      <div className="mb-8">
        <Example>
          <span className="tooltip">
            <button className="btn btn-md btn-secondary" type="button">
              Hover me
            </button>
            <span className="tooltip-content">Helpful hint</span>
          </span>
        </Example>
      </div>
    </div>
  )
}
