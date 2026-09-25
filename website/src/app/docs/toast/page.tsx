import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Toast · Tailsass UI',
}

const toastCode = `<div class="toast toast-success">
  <div class="toast-content">
    <p class="toast-title">Saved</p>
    <p class="toast-body">Your changes are live.</p>
  </div>
  <button class="toast-close" type="button" aria-label="Dismiss">×</button>
</div>`

export default function ToastPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Toast</h1>
      <DocLead>
        Stack notifications in <code>toast-viewport</code>. Variants: success, danger, warning,
        info. Use <code>toast-close</code> for dismiss.
      </DocLead>

      <DocH2 id="variants">Variants</DocH2>
      <DocP>
        Place <code>toast-viewport</code> once (fixed bottom-right by default). CSS only — wire
        dismiss handlers in your app.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={toastCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div
            className="toast-viewport"
            style={{ position: 'relative', inset: 'auto', maxWidth: 'none', pointerEvents: 'auto' }}
          >
            <div className="toast toast-success">
              <div className="toast-content">
                <p className="toast-title">Saved</p>
                <p className="toast-body">Your changes are live.</p>
              </div>
              <button className="toast-close" type="button" aria-label="Dismiss">
                ×
              </button>
            </div>
            <div className="toast toast-danger">
              <div className="toast-content">
                <p className="toast-title">Failed</p>
                <p className="toast-body">Try again in a moment.</p>
              </div>
              <button className="toast-close" type="button" aria-label="Dismiss">
                ×
              </button>
            </div>
            <div className="toast toast-warning">
              <div className="toast-content">
                <p className="toast-title">Almost full</p>
                <p className="toast-body">Storage is at 90%.</p>
              </div>
              <button className="toast-close" type="button" aria-label="Dismiss">
                ×
              </button>
            </div>
            <div className="toast toast-info">
              <div className="toast-content">
                <p className="toast-title">Tip</p>
                <p className="toast-body">You can undo this for 30 seconds.</p>
              </div>
              <button className="toast-close" type="button" aria-label="Dismiss">
                ×
              </button>
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}
