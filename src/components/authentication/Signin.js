import React, { createRef, Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';

const Signin = (props) => {
  const emailRef = createRef();
  const passwordRef = createRef();

  // const [signup, setSignup] = useState(false);
  // const [error, setError] = useState('');

  return (
    <Fragment>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event)=>{
          event.preventDefault();
          fetch('http://localhost:5000/register')
          }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" autoFocus />
            </Form.Group>
            <p className="text-danger">{props.error}</p>
            <p className="text-success">{props.success}</p>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="primary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Signup show={signup} onHide={() => setSignup(false)} error={error} /> */}
    </Fragment>
  );
};

export default Signin;
