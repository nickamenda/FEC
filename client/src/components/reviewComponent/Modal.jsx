import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm.jsx'

const Modal = (props) => {
  const { showModal, name } = props;

  return (
    <div className="reviews-modal">
      <div className="reviews-modal-content">
        <div className="reviews-modal-header">
          <h4>Write Your Review for</h4>
          <h3>About the {name}</h3>

        </div>
        <div className="reviews-modal-body">
          <ModalForm />
        </div>
        <div className="reviews-modal-footer">
          <button onClick={(e) => {
            e.preventDefault();
            showModal()
          }}>Close</button>

        </div>
      </div>
    </div>
  )
}

export default Modal;