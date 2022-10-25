import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm.jsx'

const Modal = (props) => {
  const { showModal, name } = props;

  return (
    <div className="reviews-modal">
      <div className="reviews-modal-content">
        <div className="reviews-modal-header">
          <h4>Write Your Review</h4>
          <h5>About the {name}</h5>
          <button onClick={(e) => {
            e.preventDefault();
            showModal()
          }}>Close</button>
        </div>
        <div className="reviews-modal-body">
          <ModalForm />
        </div>

      </div>
    </div>
  )
}

export default Modal;