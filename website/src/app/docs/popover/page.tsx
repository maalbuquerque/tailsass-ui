import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Popover · Tailsass UI',
}

const popoverCode = `<div class="popover">
  <button class="btn btn-md btn-outline popover-trigger" type="button">
    Details
  </button>
  <div class="popover-panel">
    <p class="popover-title">Release notes</p>
    <p class="popover-body">Opens on focus-within or with is-open.</p>
  </div>
</div>`

export default function PopoverPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Popover</h1>
      <DocLead>Lightweight panel anchored to a trigger.</DocLead>

      <DocH2 id="basic">Basic</DocH2>
      <DocP>
        Add <code>popover-panel-right</code> to align to the right edge. Toggle with focus or{' '}
        <code>is-open</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={popoverCode} />
      </div>
      <div className="mb-8">
        <Example title="Tab into the button to open">
          <div className="popover">
            <button className="btn btn-md btn-outline popover-trigger" type="button">
              Details
            </button>
            <div className="popover-panel">
              <p className="popover-title">Release notes</p>
              <p className="popover-body">Opens on focus-within or with is-open.</p>
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}
