import React, { Fragment, useState, createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalUpdate = (props) => {
  const updateInputRef = createRef();
  const newInputRef = createRef();
  const [info, setInfo] = useState('');
  const [success, setSuccess] = useState('');
  return (
    <Fragment>
      <Modal show={props.show}>
        <Modal.Header
          closeButton
          onClick={() => {
            setInfo('');
            props.onHide();
            window.location.reload(true);
          }}
        >
          <Modal.Title>Update Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select what to change</Form.Label>
              <Form.Select
                ref={updateInputRef}
                autoFocus
                onClick={() => {
                  setInfo('');
                  setSuccess('');
                }}
              >
                <option value="0"></option>
                <option value="title">Title</option>
                <option value="serviceNumber">Service Number</option>
                <option value="personalFirstName">Patient First Name</option>
                <option value="personalMiddleName">Patient Middle Name</option>
                <option value="personalSurname">Patient Surname</option>
                <option value="personalGender">Patient Gender</option>
                <option value="placeOfOrigin">Place of Origin</option>
                <option value="tribe">Tribe</option>
                <option value="trade">Trade</option>
                <option value="dateOfBirth">Date of Birth</option>
                <option value="maritalStatus">Marital Status</option>
                <option value="religion">Religion</option>
                <option value="personalPhoneNumber">
                  Patient Phone Number
                </option>
                <option value="personalEmail">Patient Email</option>
                <option value="personalCurrentAddress">Current Address</option>
                <option value="personalPermanentAddress">
                  Permanent Addresss
                </option>
                <option value="unit">Unit</option>
                <option value="nextOfKinFirstName">NOK First Name</option>
                <option value="nextOfKinMiddleName">NOK Middle Name</option>
                <option value="nextOfKinSurname">NOK Surname</option>
                <option value="nextOfKinAddress">NOK Address</option>
                <option value="nextOfKinPhoneNumber">NOK Phone Number</option>
                <option value="nextOfKinEmail">NOK Email</option>
                <option value="nextOfKinGender">NOK Gender</option>
                <option value="relationship">Relationship</option>
              </Form.Select>
              <Form.Label>New Value</Form.Label>
              <Form.Control ref={newInputRef} autoFocus />
            </Form.Group>
          </Form>
          <p className="text-danger">{info}</p>
          <p className="text-success">{success}</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            variant="primary"
            onClick={() => {
              setInfo('');
              props.onHide();
              window.location.reload(true);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              const id = props.id;
              const update = updateInputRef.current.value;
              const input = newInputRef.current.value;
              if (Number(update) !== 0) {
                await fetch('http://localhost:5000/update', {
                  headers: {
                    'content-type': 'application/json',
                  },
                  method: 'PATCH',
                  body: JSON.stringify({
                    id,
                    update,
                    input,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    newInputRef.current.value = '';
                    setSuccess('Record has been updated');
                  })
                  .catch((err) => {
                    setInfo(
                      'Error connecting to server. Please ensure you are connected to the network'
                    );
                  });
              } else {
                setInfo('You have not selected what to update');
              }
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalUpdate;
