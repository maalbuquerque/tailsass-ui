import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Typography · Tailsass UI',
}

const typeCode = `<h2 class="ui-title text-3xl font-bold mb-2">Display title</h2>
<p class="ui-lead mb-4">Lead copy for introductions.</p>
<p class="ui-muted mb-4">Muted supporting text.</p>
<p class="text-gradient text-2xl font-bold">Gradient accent</p>`

export default function TypographyPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Typography</h1>
      <DocLead>
        Light helpers on top of Tailsass type utilities: title, lead, muted, and gradient text.
      </DocLead>

      <DocH2 id="helpers">Helpers</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={typeCode} />
      </div>
      <div className="mb-8">
        <Example>
          <h2 className="ui-title mb-2 text-3xl font-bold">Display title</h2>
          <p className="ui-lead mb-4">Lead copy for introductions.</p>
          <p className="ui-muted mb-4">Muted supporting text.</p>
          <p className="text-gradient text-2xl font-bold">Gradient accent</p>
        </Example>
      </div>
    </div>
  )
}
