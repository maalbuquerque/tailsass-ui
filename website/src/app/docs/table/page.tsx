import type { Metadata } from 'next'
import CodeBlock from '@/components/docs/CodeBlock'
import Example from '@/components/docs/Example'
import { DocH2, DocLead, DocP } from '@/components/docs/DocText'

export const metadata: Metadata = {
  title: 'Table · Tailsass UI',
}

const tableCode = `<div class="table-wrap">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ada</td>
        <td>Engineer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Grace</td>
        <td>Designer</td>
        <td>Away</td>
      </tr>
    </tbody>
  </table>
</div>`

export default function TablePage() {
  return (
    <div>
      <p className="docs-nav-label mb-3 text-sm font-bold text-purple-600">Components</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Table</h1>
      <DocLead>
        Wrap with <code>table-wrap</code> for overflow. Add <code>table-compact</code> for denser
        cells.
      </DocLead>

      <DocH2 id="basic">Basic</DocH2>
      <div className="mb-4">
        <CodeBlock language="html" code={tableCode} />
      </div>
      <div className="mb-6">
        <Example>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ada</td>
                  <td>Engineer</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Grace</td>
                  <td>Designer</td>
                  <td>Away</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Example>
      </div>

      <DocH2 id="compact">Compact</DocH2>
      <DocP>
        <code>table table-compact</code>
      </DocP>
      <div className="mb-8">
        <Example>
          <div className="table-wrap">
            <table className="table table-compact">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ada</td>
                  <td>Engineer</td>
                </tr>
                <tr>
                  <td>Grace</td>
                  <td>Designer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Example>
      </div>
    </div>
  )
}
