import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
import '../styles/styles.css';

const ModalPopUp = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">HIMS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Submit</h4>
        <p>
          Before you submit, ensure all fields are filled appropriately. Do you
          want to submit?
        </p>
      </Modal.Body>
      <div className="modal_control">
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default ModalPopUp;
