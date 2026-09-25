'use client'

import { useState } from 'react'

export default function ModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="btn btn-md btn-primary" type="button" onClick={() => setOpen(true)}>
        Open modal
      </button>

      <div className={['modal', open ? 'is-open' : ''].filter(Boolean).join(' ')} role="dialog">
        <div className="modal-backdrop" onClick={() => setOpen(false)} />
        <div className="modal-dialog">
          <div className="modal-header">
            <h3 className="modal-title">Confirm</h3>
            <button
              className="modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="modal-body">
            Modal markup is CSS-only. Toggle <code>is-open</code> from your app logic.
          </div>
          <div className="modal-footer">
            <button className="btn btn-sm btn-secondary" type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-sm btn-primary" type="button" onClick={() => setOpen(false)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
