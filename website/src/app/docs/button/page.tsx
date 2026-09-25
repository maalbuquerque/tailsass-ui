import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Button · Tailsass UI',
}

const sizesCode = `<button class="btn btn-xs btn-primary" type="button">XS</button>
<button class="btn btn-sm btn-primary" type="button">SM</button>
<button class="btn btn-md btn-primary" type="button">MD</button>
<button class="btn btn-lg btn-primary" type="button">LG</button>
<button class="btn btn-xl btn-primary" type="button">XL</button>`

const variantsCode = `<button class="btn btn-md btn-primary" type="button">Primary</button>
<button class="btn btn-md btn-secondary" type="button">Secondary</button>
<button class="btn btn-md btn-danger" type="button">Danger</button>
<button class="btn btn-md btn-ghost" type="button">Ghost</button>
<button class="btn btn-md btn-outline" type="button">Outline</button>
<button class="btn btn-md btn-link" type="button">Link</button>`

export default function ButtonPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Button</h1>
      <DocLead>
        Combine size and variant: <code>btn</code> + <code>btn-md</code> + <code>btn-primary</code>.
      </DocLead>

      <DocH2 id="sizes">Sizes</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={sizesCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="docs-demo-row">
            <button className="btn btn-xs btn-primary" type="button">
              XS
            </button>
            <button className="btn btn-sm btn-primary" type="button">
              SM
            </button>
            <button className="btn btn-md btn-primary" type="button">
              MD
            </button>
            <button className="btn btn-lg btn-primary" type="button">
              LG
            </button>
            <button className="btn btn-xl btn-primary" type="button">
              XL
            </button>
          </div>
        </Example>
      </div>

      <DocH2 id="variants">Variants</DocH2>
      <DocP>
        Variants: <code>primary</code>, <code>secondary</code>, <code>danger</code>,{' '}
        <code>ghost</code>, <code>outline</code>, <code>link</code>. Use <code>btn-block</code> for
        full width.
      </DocP>
      <div className="mb-4">
        <CodeBlock language="html" code={variantsCode} />
      </div>
      <div className="mb-8">
        <Example>
          <div className="docs-demo-row">
            <button className="btn btn-md btn-primary" type="button">
              Primary
            </button>
            <button className="btn btn-md btn-secondary" type="button">
              Secondary
            </button>
            <button className="btn btn-md btn-danger" type="button">
              Danger
            </button>
            <button className="btn btn-md btn-ghost" type="button">
              Ghost
            </button>
            <button className="btn btn-md btn-outline" type="button">
              Outline
            </button>
            <button className="btn btn-md btn-link" type="button">
              Link
            </button>
            <button className="btn btn-md btn-primary" type="button" disabled>
              Disabled
            </button>
          </div>
        </Example>
      </div>
    </div>
  )
}
