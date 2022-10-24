import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  const { showModal } = props;

  return (
    <div className="reviews-modal">
      <div className="reviews-modal-content">
        <div className="reviews-modal-header">
          <h4>Header</h4>
        </div>
        <div className="reviews-modal-body">
          <p>content</p>
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