import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose, color }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className={color}><button
          className="absolute top-0 right-0 m-2 p-2 bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-800 rounded-full"
          onClick={onClose}
        >
          Close
        </button>
          {children}</div>




      </div>
    </>,
    document.getElementById('root')
  )
}