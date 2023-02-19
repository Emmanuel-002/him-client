import React, { Fragment, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import ModalError from './ModalError';
import ModalUpdate from './ModalUpdate';

const Patients = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState('');

  function deleteRowById(id) {
    fetch('http://localhost:5000/delete/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle('Success');
        setInfo('Patient has been deleted');
        setShow(true);
        console.log(data);
      })
      .catch((err) => {
        setTitle('Error');
        setInfo(
          'Error connecting to server. Please ensure you are connected to the network'
        );
        setShow(true);
      });
  }

  function editRowById(id) {
    setConfirm(true);
    setId(id);
  }

  return props.item.length > 0 ? (
    <Fragment>
      <Container>
        <Table
          striped
          bordered
          hover
          responsive
          onClick={(event) => {
            event.preventDefault();
            if (event.target.className === 'btn btn-danger') {
              deleteRowById(event.target.id);
              document.querySelector(`.class${event.target.id}`).style.display =
                'none';
            } else if (event.target.className === 'btn btn-warning') {
              editRowById(event.target.id);
            }
          }}
        >
          <thead>
            <tr className="fs-1 text-primary">
              <th className="text-center" colSpan={18}>
                Personal Information
              </th>
              <th className="text-center" colSpan={8}>
                Next of Kin Information
              </th>
              <th className="text-center" colSpan={2} rowSpan={2}>
                Update
              </th>
            </tr>
            <tr>
              <th>Date Enrolled</th>
              <th>Title</th>
              <th>Svc No</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>Place of Origin</th>
              <th>Tribe</th>
              <th>Trade</th>
              <th>Date of Birth</th>
              <th>Marital Status</th>
              <th>Religion</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Current Address</th>
              <th>Permanent Address</th>
              <th>Unit</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Surname</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Relationship</th>
            </tr>
          </thead>
          <tbody>
            {props.item.map((patient) => (
              <tr key={patient['id']} className={`class${patient['id']}`}>
                <td>{patient['date']} </td>
                <td>{patient['title']} </td>
                <td>{patient['serviceNumber']} </td>
                <td>{patient['personalFirstName']} </td>
                <td>{patient['personalMiddleName']} </td>
                <td>{patient['personalSurname']} </td>
                <td>{patient['personalGender']} </td>
                <td>{patient['placeOfOrigin']} </td>
                <td>{patient['tribe']} </td>
                <td>{patient['trade']} </td>
                <td>{patient['dateOfBirth']} </td>
                <td>{patient['maritalStatus']} </td>
                <td>{patient['religion']} </td>
                <td>{patient['personalPhoneNumber']} </td>
                <td>{patient['personalEmail']} </td>
                <td>{patient['personalCurrentAddress']} </td>
                <td>{patient['personalPermanentAddress']} </td>
                <td>{patient['unit']} </td>
                <td>{patient['nextOfKinFirstName']} </td>
                <td>{patient['nextOfKinMiddleName']} </td>
                <td>{patient['nextOfKinSurname']} </td>
                <td>{patient['nextOfKinAddress']} </td>
                <td>{patient['nextOfKinPhoneNumber']} </td>
                <td>{patient['nextOfKinEmail']} </td>
                <td>{patient['nextOfKinGender']} </td>
                <td>{patient['relationship']} </td>
                <td>
                  <Button variant="warning" id={patient['id']}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" id={patient['id']}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <ModalError
        show={show}
        info={info}
        title={title}
        onHide={() => setShow(false)}
      />
      <ModalUpdate
        show={confirm}
        info={info}
        onHide={() => setConfirm(false)}
        id={id}
      />
    </Fragment>
  ) : (
    ''
  );
};

export default Patients;
