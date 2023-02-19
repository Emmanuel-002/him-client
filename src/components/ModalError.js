import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalError = (props) => {
  return (
    <Modal {...props} size="sm" aria-labelledby="example-modal-sizes-title-sm">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.info}</Modal.Body>
    </Modal>
  );
};

export default ModalError;
