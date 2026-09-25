'use client'

export default function FormDemo() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="form-field">
        <label className="form-label" htmlFor="demo-email">
          Email
        </label>
        <p className="form-hint">We&apos;ll never share it.</p>
        <input
          className="form-control"
          id="demo-email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="demo-role">
          Role
        </label>
        <select className="form-control" id="demo-role" defaultValue="Engineer">
          <option>Designer</option>
          <option>Engineer</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="demo-notes">
          Notes
        </label>
        <textarea className="form-control" id="demo-notes" placeholder="Optional" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="demo-bad">
          With error
        </label>
        <input className="form-control form-control-error" id="demo-bad" defaultValue="oops" />
        <p className="form-error">Please enter a valid value.</p>
      </div>

      <div className="form-check">
        <input id="demo-terms" type="checkbox" />
        <label htmlFor="demo-terms">I agree</label>
      </div>

      <div className="form-actions">
        <button className="btn btn-md btn-primary" type="submit">
          Submit
        </button>
        <button className="btn btn-md btn-secondary" type="button">
          Cancel
        </button>
      </div>
    </form>
  )
}
