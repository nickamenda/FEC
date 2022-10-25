import React from 'react';
import Modal from '../Modal.jsx';


const ImageView = ({ photo }) => {
  return (
    <img src={photo} className="QA-modal-image" alt="Pictures provided by poster"/>
  )
}

export default ImageView;