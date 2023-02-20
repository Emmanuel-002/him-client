import React, { createRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const Signup = (props) => {
  const firstNameRef = createRef();
  const middleNameRef = createRef();
  const surnameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const confirmPasswordRef = createRef();

  const [signup, setSignup] = useState(props.show);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <Modal
      show={props.show}
      onFocus={() => {
        setError('');
        setSuccess('');
      }}
    >
      <Modal.Header
        onClick={() => {
          props.onHide();
          setSuccess('');
          setError('');
        }}
        closeButton
      >
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" ref={firstNameRef} autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              ref={middleNameRef}
              placeholder="Optional"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" ref={surnameRef} autoFocus />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control ref={confirmPasswordRef} type="password" autoFocus />
          </Form.Group>
        </Form>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="primary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={async (event) => {
            event.preventDefault();
            if (
              firstNameRef.current.value &&
              surnameRef.current.value &&
              emailRef.current.value &&
              passwordRef.current.value &&
              confirmPasswordRef.current.value
            ) {
              console.log(true);
              await fetch('http://localhost:5000/register', {
                headers: {
                  'content-type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                  firstName: firstNameRef.current.value,
                  middleName: middleNameRef.current.value,
                  surname: surnameRef.current.value,
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                  confirmPassword: confirmPasswordRef.current.value,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (!data) {
                    setError(
                      'Error connecting to server. Please ensure you are connected to the network'
                    );
                  } else {
                    setSuccess('Registration was successful');
                    return data;
                  }
                })
                .catch((err) => {
                  setError('Server not found');
                });
            } else {
              setError("Can't submit. Please fill all the required fields");
            }
          }}
        >
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup;
