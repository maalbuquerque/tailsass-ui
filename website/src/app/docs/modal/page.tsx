import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import ModalDemo from '@/components/docs/ModalDemo'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Modal · Tailsass UI',
}

const modalCode = `<div class="modal is-open">
  <div class="modal-backdrop"></div>
  <div class="modal-dialog">
    <div class="modal-header">
      <h3 class="modal-title">Confirm</h3>
      <button class="modal-close" type="button" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">Body copy goes here.</div>
    <div class="modal-footer">
      <button class="btn btn-sm btn-secondary" type="button">Cancel</button>
      <button class="btn btn-sm btn-primary" type="button">Confirm</button>
    </div>
  </div>
</div>`

export default function ModalPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Modal</h1>
      <DocLead>
        Overlay dialog. Add <code>is-open</code> to show; no JS is bundled with the CSS.
      </DocLead>

      <DocH2 id="structure">Structure</DocH2>
      <DocP>
        Parts: <code>modal</code>, <code>modal-backdrop</code>, <code>modal-dialog</code>,{' '}
        <code>modal-header</code>, <code>modal-title</code>, <code>modal-close</code>,{' '}
        <code>modal-body</code>, <code>modal-footer</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={modalCode} />
      </div>
      <div className="mb-8">
        <Example>
          <ModalDemo />
        </Example>
      </div>
    </div>
  )
}
