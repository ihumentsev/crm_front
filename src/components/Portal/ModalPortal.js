import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBackdrop } from './Portal.styled';

const ModalPortal = ({ children }) => {
  const [modalRoot] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, [modalRoot]);

  return ReactDOM.createPortal(
    <>
      <ModalBackdrop className="modal-backdrop">{children}</ModalBackdrop>
    </>,
    modalRoot
  );
};

export default ModalPortal;
