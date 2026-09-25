import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Getting started · Tailsass UI',
  description: 'Install Tailsass UI and load components beside Tailsass.',
}

const installCode = `npm install @maalbuquerque/tailsass @maalbuquerque/tailsass-ui`

const sassCode = `@use '@maalbuquerque/tailsass/src/index';
@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
    'red': palette('red'),
    'emerald': palette('emerald'),
    'amber': palette('amber'),
    'blue': palette('blue'),
  )
);
@use '@maalbuquerque/tailsass-ui/src/index';`

const cssCode = `import '@maalbuquerque/tailsass/dist/tailsass.css'
import './app-colors.css'
import '@maalbuquerque/tailsass-ui/dist/tailsass-ui.css'`

const markupCode = `<button class="btn btn-md btn-primary" type="button">Save</button>`

export default function GettingStartedPage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Start</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Getting started</h1>
      <DocLead>
        Install Tailsass and Tailsass UI, load colors, then use semantic component classes.
      </DocLead>

      <DocH2 id="install">Install</DocH2>
      <DocP>Both packages are required — UI peers Tailsass for utilities.</DocP>
      <div className="mb-6">
        <CodeBlock language="bash" code={installCode} />
      </div>

      <DocH2 id="sass">Use with Sass</DocH2>
      <DocP>
        Import core, your color map, then UI. UI components <code>@extend</code> Tailsass
        utilities, so the utility stylesheet must be in the same compilation.
      </DocP>
      <div className="mb-6">
        <CodeBlock language="scss" code={sassCode} />
      </div>

      <DocH2 id="css">Use compiled CSS</DocH2>
      <DocP>
        Import core, your compiled colors, then the UI bundle. The published{' '}
        <code>tailsass-ui.css</code> demo build includes a default palette set for docs; apps
        should compile their own colors layer.
      </DocP>
      <div className="mb-6">
        <CodeBlock language="js" code={cssCode} />
      </div>

      <DocH2 id="markup">First component</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={markupCode} />
      </div>
      <div className="mb-8">
        <Example>
          <button className="btn btn-md btn-primary" type="button">
            Save
          </button>
        </Example>
      </div>
    </div>
  )
}
