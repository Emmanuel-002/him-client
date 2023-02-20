import React, { Fragment, useState, createRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/styles.css';
import ModalPopUp from '../ModalPopUp';
import ModalError from '../ModalError';

const Enrol = () => {
  let titleRef = createRef();
  let serviceNumberRef = createRef();
  let personalFirstNameRef = createRef();
  let personnalMiddleNameRef = createRef();
  let personalSurnameRef = createRef();
  let personalGenderRef = createRef();
  let dateOfBirthRef = createRef();
  let placeOfOriginRef = createRef();
  let tribeRef = createRef();
  let tradeRef = createRef();
  let maritalStatusRef = createRef();
  let religionRef = createRef();
  let personalPhoneNumberRef = createRef();
  let personalEmailRef = createRef();
  let personalCurrentAddressRef = createRef();
  let personalPermanentAddressRef = createRef();
  let unitRef = createRef();
  let nextOfKinFirstNameRef = createRef();
  let nextOfKinMiddleNameRef = createRef();
  let nextOfKinSurnameRef = createRef();
  let nextOfKinAddressRef = createRef();
  let nextOfKinPhoneNumberRef = createRef();
  let nextOfKinEmailRef = createRef();
  let relationshipRef = createRef();
  let nextOfKinGenderRef = createRef();

  const [validated, setValidated] = useState(false);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit0 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (
      titleRef.current.value !== '0' &&
      personalFirstNameRef.current.value &&
      personalSurnameRef.current.value &&
      personalGenderRef.current.value !== '0' &&
      dateOfBirthRef.current.value &&
      placeOfOriginRef.current.value !== '0' &&
      tribeRef.current.value &&
      tradeRef.current.value &&
      maritalStatusRef.current.value !== '0' &&
      religionRef.current.value !== '0'
    ) {
      setPage((currPage) => currPage + 1);
    } else {
      setTitle('Error');
      setInfo('Please fill all the required fields');
      setError(true);
    }
    setValidated(true);
  };
  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (
      personalPhoneNumberRef.current.value &&
      personalEmailRef.current.value &&
      personalCurrentAddressRef.current.value &&
      personalPermanentAddressRef.current.value &&
      unitRef.current.value !== '0'
    ) {
      setPage((currPage) => currPage + 1);
    } else {
      setTitle('Error');
      setInfo('Please fill all the required fields');
      setError(true);
    }
    setValidated(true);
  };
  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (
      nextOfKinFirstNameRef.current.value &&
      nextOfKinFirstNameRef.current.value &&
      nextOfKinSurnameRef.current.value &&
      nextOfKinAddressRef.current.value &&
      nextOfKinPhoneNumberRef.current.value &&
      nextOfKinEmailRef.current.value &&
      relationshipRef.current.value !== '0' &&
      nextOfKinGenderRef.current.value !== '0'
    ) {
      setModal(true);
    } else {
      setTitle('Error');
      setInfo('Please fill all the required fields');
      setError(true);
    }
    setValidated(true);
  };

  const FormTitles = ['Personal Data', 'Contact', 'Next of Kin', 'Submit'];

  const PageDisplay = () => {
    return (
      <Fragment>
        <Form
          noValidate
          validated={validated}
          className={page === 0 ? 'show' : 'hide'}
        >
          <div className={'step1'}></div>
          <h1>{FormTitles[page]}</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Select aria-label="Default select example" ref={titleRef}>
                <option value="0"></option>
                <option value="Air Marshal">Air Marshal</option>
                <option value="Air Vice Marshal">Air Vice Marshal</option>
                <option value="Air Commodore">Air Commodore</option>
                <option value="Group Captain">Group Captain</option>
                <option value="Wing Commander">Wing Commander</option>
                <option value="Squadron Leader">Squadron Leader</option>
                <option value="Flight Lieutenant">Flight Lieutenant</option>
                <option value="Flying Officer">Flying Officer</option>
                <option value="Pilot Officer">Pilot Officer</option>
                <option value="Air Warrant Officer">Air Warrant Officer</option>
                <option value="Master Warrant Officer">
                  Master Warrant Officer
                </option>
                <option value="Warrant Officer">Warrant Officer</option>
                <option value="Flight Seargent">Flight Seargent</option>
                <option value="Seargent">Seargent</option>
                <option value="Corporal">Corporal</option>
                <option value="Lance Corporal">Lance Corporal</option>
                <option value="Aircraftman">Aircraftman</option>
                <option value="Aircraftwoman">Aircraftwoman</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Chief">Chief</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Service Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={'Optional'}
                ref={serviceNumberRef}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" ref={personalFirstNameRef} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={'Optional'}
                ref={personnalMiddleNameRef}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Surname</Form.Label>
              <Form.Control required type="text" ref={personalSurnameRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                ref={personalGenderRef}
              >
                <option value="0"></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control required type="date" ref={dateOfBirthRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>Place of Origin</Form.Label>
              <Form.Select ref={placeOfOriginRef}>
                <option value="0"></option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa-Ibom">Akwa-ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yola">Yola</option>
                <option value="Zamfara">Zamfara</option>
                <option value="FCT">FCT</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>Tribe</Form.Label>
              <Form.Control required type="text" ref={tribeRef} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom10">
              <Form.Label>Trade</Form.Label>
              <Form.Control required type="text" ref={tradeRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom11">
              <Form.Label>Marital Status</Form.Label>
              <Form.Select ref={maritalStatusRef}>
                <option value="0"></option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Complicated">Complicated</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom12">
              <Form.Label>Religion</Form.Label>
              <Form.Select ref={religionRef}>
                <option value="0"></option>
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Others">Others</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="form_control">
            <Button disabled={true}>{'<< Prev'}</Button>
            <Button onClick={handleSubmit0}>{'Next >>'}</Button>
          </div>
        </Form>

        <Form
          noValidate
          validated={validated}
          className={page === 1 ? 'show' : 'hide'}
        >
          <div className={'step2'}></div>
          <h1>{FormTitles[page]}</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom13">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required type="tel" ref={personalPhoneNumberRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom14">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" ref={personalEmailRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom15">
              <Form.Label>Current Address</Form.Label>
              <Form.Control
                required
                type="text"
                ref={personalCurrentAddressRef}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom16">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control
                required
                type="text"
                ref={personalPermanentAddressRef}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom18">
              <Form.Label>Unit/Organization</Form.Label>
              <Form.Select ref={unitRef}>
                <option value="0"></option>
                <option value="HQ NAF">HQ NAF</option>
                <option value="NAFRC">NAFRC</option>
                <option value="NAFHRC">NAFHRC</option>
                <option value="AIELTS">AIELTS</option>
                <option value="AFIT">AFIT</option>
                <option value="041 CD">041 CD</option>
                <option value="101 ADG">101 ADG</option>
                <option value="103 STG">103 STG</option>
                <option value="105 CG">105 CG</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="form_control">
            <Button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              {'<< Prev'}
            </Button>
            <Button onClick={handleSubmit1}>{'Next >>'}</Button>
          </div>
        </Form>

        <Form
          noValidate
          validated={validated}
          className={page === 2 ? 'show' : 'hide'}
        >
          <div className={'step3'}></div>
          <h1>{FormTitles[page]}</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom19">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" ref={nextOfKinFirstNameRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom20">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={'Optional'}
                ref={nextOfKinMiddleNameRef}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom21">
              <Form.Label>Surname</Form.Label>
              <Form.Control required type="text" ref={nextOfKinSurnameRef} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom22">
              <Form.Label>Address</Form.Label>
              <Form.Control required type="text" ref={nextOfKinAddressRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom23">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required type="tel" ref={nextOfKinPhoneNumberRef} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom24">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" ref={nextOfKinEmailRef} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom25">
              <Form.Label>Relationship</Form.Label>
              <Form.Select required type="text" ref={relationshipRef}>
                <option value="0"></option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Nephew">Nephew</option>
                <option value="Niece">Niece</option>
                <option value="Uncle">Uncle</option>
                <option value="Aunty">Aunty</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Daughter">Daughter</option>
                <option value="Son">Son</option>
                <option value="Friend">Friend</option>
                <option value="Guardian">Guardian</option>
                <option value="Wife">Wife</option>
                <option value="Husband">Husband</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom26">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                required
                placeholder={'Required'}
                type="text"
                ref={nextOfKinGenderRef}
              >
                <option value="0"></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <br />
          <div className="form_control">
            <Button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              {'<< Prev'}
            </Button>
            <Button onClick={handleSubmit2}>{'Next >>'}</Button>
          </div>
        </Form>
        <ModalPopUp
          show={modal}
          onSubmit={async () => {
            const patients = await fetch('http://localhost:5000/getpatients')
              .then((res) => res.json())
              .then((data) => data)
              .catch((err) => {
                setTitle('Error');
                setInfo(
                  'Error connecting to server. Please ensure you are connected to the network'
                );
                setError(true);
                setModal(false);
              });
            let result = patients.find(
              (patient) =>
                String(patient.personalEmail) === personalEmailRef.current.value
            );
            console.log(result);
            if (result) {
              setTitle('Error');
              setInfo('Email has been used');
              setError(true);
              setModal(false);
            }
            // start
            else {
              await fetch('http://localhost:5000/enrolment', {
                headers: {
                  'content-type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                  title: titleRef.current.value,
                  serviceNumber: serviceNumberRef.current.value,
                  personalFirstName: personalFirstNameRef.current.value,
                  personalMiddleName: personnalMiddleNameRef.current.value,
                  personalSurname: personalSurnameRef.current.value,
                  personalGender: personalGenderRef.current.value,
                  dateOfBirth: dateOfBirthRef.current.value,
                  placeOfOrigin: placeOfOriginRef.current.value,
                  tribe: tribeRef.current.value,
                  trade: tradeRef.current.value,
                  maritalStatus: maritalStatusRef.current.value,
                  religion: religionRef.current.value,
                  personalPhoneNumber: personalPhoneNumberRef.current.value,
                  personalEmail: personalEmailRef.current.value,
                  personalCurrentAddress:
                    personalCurrentAddressRef.current.value,
                  personalPermanentAddress:
                    personalPermanentAddressRef.current.value,
                  unit: unitRef.current.value,
                  nextOfKinFirstName: nextOfKinFirstNameRef.current.value,
                  nextOfKinMiddleName: nextOfKinMiddleNameRef.current.value,
                  nextOfKinSurname: nextOfKinSurnameRef.current.value,
                  nextOfKinAddress: nextOfKinAddressRef.current.value,
                  nextOfKinPhoneNumber: nextOfKinPhoneNumberRef.current.value,
                  nextOfKinEmail: nextOfKinEmailRef.current.value,
                  relationship: relationshipRef.current.value,
                  nextOfKinGender: nextOfKinGenderRef.current.value,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  titleRef.current.value = '';
                  serviceNumberRef.current.value = '';
                  personalFirstNameRef.current.value = '';
                  personnalMiddleNameRef.current.value = '';
                  personalSurnameRef.current.value = '';
                  personalGenderRef.current.value = '';
                  dateOfBirthRef.current.value = '';
                  placeOfOriginRef.current.value = '';
                  tribeRef.current.value = '';
                  tradeRef.current.value = '';
                  maritalStatusRef.current.value = '';
                  religionRef.current.value = '';
                  personalPhoneNumberRef.current.value = '';
                  personalEmailRef.current.value = '';
                  personalCurrentAddressRef.current.value = '';
                  personalPermanentAddressRef.current.value = '';
                  unitRef.current.value = '';
                  nextOfKinFirstNameRef.current.value = '';
                  nextOfKinMiddleNameRef.current.value = '';
                  nextOfKinSurnameRef.current.value = '';
                  nextOfKinAddressRef.current.value = '';
                  nextOfKinPhoneNumberRef.current.value = '';
                  nextOfKinEmailRef.current.value = '';
                  relationshipRef.current.value = '';
                  nextOfKinGenderRef.current.value = '';
                  setTitle('Success');
                  setInfo('Patient has been enrolled');
                  setError(true);
                })
                .catch((err) => {
                  setTitle('Error');
                  setInfo(
                    'Error connecting to server. Please ensure you are connected to the network'
                  );
                  setError(true);
                });

              setModal(false);
            }
          }}
          // end
          onHide={() => setModal(false)}
        />
        <ModalError
          show={error}
          onHide={() => setError(false)}
          info={info}
          title={title}
        />
      </Fragment>
    );
  };

  return (
    <Container className="form_container">
      <div>{PageDisplay()}</div>
    </Container>
  );
};
export default Enrol;
