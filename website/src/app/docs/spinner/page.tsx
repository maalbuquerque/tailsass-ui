import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Spinner · Tailsass UI',
}

const sizesCode = `<span class="spinner spinner-xs" role="status" aria-label="Loading"></span>
<span class="spinner spinner-sm" role="status" aria-label="Loading"></span>
<span class="spinner spinner-md" role="status" aria-label="Loading"></span>
<span class="spinner spinner-lg" role="status" aria-label="Loading"></span>
<span class="spinner spinner-xl" role="status" aria-label="Loading"></span>`

const variantsCode = `<span class="spinner spinner-md" role="status" aria-label="Loading"></span>
<span class="spinner spinner-md spinner-muted" role="status" aria-label="Loading"></span>
<span class="spinner spinner-md spinner-danger" role="status" aria-label="Loading"></span>
<span class="spinner spinner-md spinner-success" role="status" aria-label="Loading"></span>
<button class="btn btn-md btn-primary" type="button" disabled>
  <span class="spinner spinner-sm spinner-white" role="status" aria-hidden="true"></span>
  Saving…
</button>`

export default function SpinnerPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Spinner</h1>
      <DocLead>
        Loading circle: <code>spinner</code> + size, optional color modifier.
      </DocLead>

      <DocH2 id="sizes">Sizes</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={sizesCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="docs-demo-row">
            <span className="spinner spinner-xs" role="status" aria-label="Loading" />
            <span className="spinner spinner-sm" role="status" aria-label="Loading" />
            <span className="spinner spinner-md" role="status" aria-label="Loading" />
            <span className="spinner spinner-lg" role="status" aria-label="Loading" />
            <span className="spinner spinner-xl" role="status" aria-label="Loading" />
          </div>
        </Example>
      </div>

      <DocH2 id="variants">Variants</DocH2>
      <DocP>
        Default uses primary. Also <code>spinner-muted</code>, <code>spinner-danger</code>,{' '}
        <code>spinner-success</code>, and <code>spinner-white</code> for dark buttons.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={variantsCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div className="docs-demo-row">
            <span className="spinner spinner-md" role="status" aria-label="Loading" />
            <span className="spinner spinner-md spinner-muted" role="status" aria-label="Loading" />
            <span className="spinner spinner-md spinner-danger" role="status" aria-label="Loading" />
            <span className="spinner spinner-md spinner-success" role="status" aria-label="Loading" />
            <button className="btn btn-md btn-primary" type="button" disabled>
              <span className="spinner spinner-sm spinner-white" role="status" aria-hidden="true" />
              Saving…
            </button>
          </div>
        </Example>
      </div>
    </div>
  )
}
