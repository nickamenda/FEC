import React, {useState, useEffect, useImperativeHandle, forwardRef} from React;
import { createPortal } from 'react-dom';

// Gets div in index.html that will be used for our portal
const modalElement = document.getElementById('modal-root')

const Modal = ({ children, defaultOpened = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpened)

  return createPortal(
    isModalOpen ? <div className="modal">{children}</div>, modalElement : null
    , modalElement
  )

}

export default Modal;