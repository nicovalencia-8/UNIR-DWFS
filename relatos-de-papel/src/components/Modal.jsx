import React from 'react'

const Modal = ({ show, onClose, children}) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="bg-white p-4 rounded-xl shadow-xl max-w-sm w-full text-center">
        {children}
        <button
          className="mt-4 text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal