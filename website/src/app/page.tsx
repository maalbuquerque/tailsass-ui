import Link from 'next/link'

const highlights = [
  {
    title: 'Semantic classes',
    body: 'Buttons, forms, cards, and overlays ship as readable class names — built by extending Tailsass utilities.',
  },
  {
    title: 'Theme tokens',
    body: 'Override --ui-* CSS variables for brand colors, surfaces, and radius without rewriting components.',
  },
  {
    title: 'Peer Tailsass',
    body: 'Keep core utilities lean. UI lives in this package so every app can share the same component layer.',
  },
]

export default function HomePage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Documentation</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Tailsass UI</h1>
      <p className="mb-6 text-lg text-slate-600">
        Semantic components on top of Tailsass. Same utility DNA, fewer repeated class strings in
        app markup.
      </p>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border-1 border-solid border-purple-200 bg-white p-5"
          >
            <p className="mb-2 text-sm font-bold text-purple-700">{item.title}</p>
            <p className="text-sm text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-lg border-1 border-solid border-purple-200 bg-purple-50 p-5">
        <p className="mb-2 text-sm font-bold text-purple-800">Install</p>
        <code className="text-sm text-purple-900">
          npm install @maalbuquerque/tailsass @maalbuquerque/tailsass-ui
        </code>
      </div>

      <p className="text-base text-slate-600">
        Start with{' '}
        <Link className="text-purple-700" href="/docs/getting-started">
          Getting started
        </Link>{' '}
        or jump to{' '}
        <Link className="text-purple-700" href="/docs/button">
          Button
        </Link>
        .
      </p>
    </div>
  )
}
