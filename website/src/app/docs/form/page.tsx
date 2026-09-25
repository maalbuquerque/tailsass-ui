import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import FormDemo from '@/components/docs/FormDemo'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Form · Tailsass UI',
}

const formCode = `<div class="form-field">
  <label class="form-label" for="email">Email</label>
  <p class="form-hint">We'll never share it.</p>
  <input class="form-control" id="email" type="email" placeholder="you@example.com" />
</div>

<div class="form-check">
  <input id="terms" type="checkbox" />
  <label for="terms">I agree</label>
</div>

<div class="form-actions">
  <button class="btn btn-md btn-primary" type="submit">Submit</button>
  <button class="btn btn-md btn-secondary" type="button">Cancel</button>
</div>`

export default function FormPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Form</h1>
      <DocLead>
        Field layout, controls, checks, and actions. Add <code>form-control-error</code> and{' '}
        <code>form-error</code> for validation.
      </DocLead>

      <DocH2 id="fields">Fields</DocH2>
      <DocP>
        Classes: <code>form-field</code>, <code>form-label</code>, <code>form-hint</code>,{' '}
        <code>form-control</code>, <code>form-check</code>, <code>form-actions</code>.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={formCode} />
      </div>
      <div className="mb-8">
        <Example>
          <FormDemo />
        </Example>
      </div>
    </div>
  )
}
