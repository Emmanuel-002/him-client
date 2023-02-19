import React, { Fragment, useState, createRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ModalError from './ModalError';
import Patients from './Patients';

const Admin = () => {
  let searchInputRef = createRef();

  const [info, setInfo] = useState('');
  const [show, setShow] = useState('');
  const [title, setTitle] = useState('');
  const [patients, setPatients] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Fragment>
      <Container className="mt-1 mb-2">
        <Row className="justify-content-center">
          <Col md="auto fs-1" xs="auto" className="text-primary fw-bold">
            Welcome Admin
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Form.Select ref={searchInputRef}>
              <option value="0"></option>
              <option value="patient">Patients</option>
              <option value="consultant">Consultants</option>
              <option value="doctor">Doctors</option>
              <option value="nurse">Nurses</option>
              <option value="attendant">Attendants</option>
            </Form.Select>
          </Col>
          <Col md="auto" xs="auto">
            <Button
              md="auto"
              onClick={async () => {
                if (Number(searchInputRef.current.value) === 0) {
                  setInfo('Please select input');
                  setTitle('Alert');
                  setShow(true);
                  setShowDetails(false);
                } else if (searchInputRef.current.value === 'patient') {
                  await fetch('http://localhost:5000/getpatients')
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.length > 0) {
                        setPatients(data);
                        setShowDetails(true);
                      } else {
                        setInfo('No patient has been enrolled');
                        setTitle('Patients');
                        setShow(true);
                        setShowDetails(false);
                      }
                      return;
                    })
                    .catch((err) => {
                      setInfo(
                        'Error connecting to server. Please ensure you are connected to the network'
                      );
                      setShow(true);
                      setTitle('Connection Error!');
                    });
                } else if (searchInputRef.current.value === 'consultant') {
                  setInfo('Coming soon');
                  setTitle('Consultants');
                  setShow(true);
                  setShowDetails(false);
                } else if (searchInputRef.current.value === 'doctor') {
                  setInfo('Coming soon');
                  setTitle('Doctors');
                  setShow(true);
                  setShowDetails(false);
                } else if (searchInputRef.current.value === 'nurse') {
                  setInfo('Coming soon');
                  setTitle('Nurses');
                  setShow(true);
                  setShowDetails(false);
                } else if (searchInputRef.current.value === 'attendant') {
                  setInfo('Coming soon');
                  setTitle('Attendants');
                  setShow(true);
                  setShowDetails(false);
                }
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
      <ModalError
        show={show}
        info={info}
        title={title}
        onHide={() => setShow(false)}
      />
      {showDetails ? <Patients item={patients} /> : ''}
    </Fragment>
  );
};

export default Admin;
