import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Theming · Tailsass UI',
  description: 'Override Tailsass UI CSS variables for brand colors and surfaces.',
}

const tokensCode = `:root {
  --ui-primary: var(--purple-600);
  --ui-primary-hover: var(--purple-800);
  --ui-primary-text: var(--white);
  --ui-secondary: var(--slate-100);
  --ui-border: var(--slate-300);
  --ui-surface: var(--white);
  --ui-text: var(--slate-900);
  --ui-muted: var(--slate-500);
  --ui-radius: 0.375rem;
}`

const overrideCode = `:root {
  --ui-primary: #0f766e;
  --ui-primary-hover: #115e59;
  --ui-radius: 0.75rem;
}`

export default function ThemingPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Start</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Theming</h1>
      <DocLead>
        Components read <code>--ui-*</code> tokens. Point them at your Tailsass color variables or
        any CSS color.
      </DocLead>

      <DocH2 id="defaults">Default tokens</DocH2>
      <DocP>Defined in <code>src/_variables.scss</code>:</DocP>
      <div className="mb-6">
        <CodeBlock language="css" code={tokensCode} />
      </div>

      <DocH2 id="override">Override in your app</DocH2>
      <div className="mb-4">
        <CodeBlock language="css" code={overrideCode} />
      </div>
      <div className="mb-8">
        <Example title="Primary uses --ui-primary">
          <div className="docs-demo-row">
            <button className="btn btn-md btn-primary" type="button">
              Primary
            </button>
            <button className="btn btn-md btn-secondary" type="button">
              Secondary
            </button>
            <button className="btn btn-md btn-outline" type="button">
              Outline
            </button>
          </div>
        </Example>
      </div>
    </div>
  )
}
