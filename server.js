const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const uuid = require('uuid');
const path = require('path');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/register', (req, res) => {
  const { firstName, middleName, surname, email, password } = req.body;
  const id = uuid.v4();
  const db = dbService.getDbServiceInstance();
  const result = db.insertNewUser(
    id,
    firstName,
    middleName,
    surname,
    email,
    password
  );
  result
    .then((data) => res.json({ data: data }))
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
});

app.post('/enrolment', (req, res) => {
  const {
    title,
    serviceNumber,
    personalFirstName,
    personalMiddleName,
    personalSurname,
    personalGender,
    placeOfOrigin,
    tribe,
    trade,
    dateOfBirth,
    maritalStatus,
    religion,
    personalPhoneNumber,
    personalEmail,
    personalCurrentAddress,
    personalPermanentAddress,
    unit,
    nextOfKinFirstName,
    nextOfKinMiddleName,
    nextOfKinSurname,
    nextOfKinAddress,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
    relationship,
    nextOfKinGender,
  } = req.body;
  const id = uuid.v4();
  const date = new Date().toLocaleString();
  const db = dbService.getDbServiceInstance();
  const result = db.insertNewPatient(
    id,
    title,
    serviceNumber,
    personalFirstName,
    personalMiddleName,
    personalSurname,
    personalGender,
    placeOfOrigin,
    tribe,
    trade,
    dateOfBirth,
    maritalStatus,
    religion,
    personalPhoneNumber,
    personalEmail,
    personalCurrentAddress,
    personalPermanentAddress,
    unit,
    nextOfKinFirstName,
    nextOfKinMiddleName,
    nextOfKinSurname,
    nextOfKinAddress,
    nextOfKinPhoneNumber,
    nextOfKinEmail,
    relationship,
    nextOfKinGender,
    date
  );
  result
    .then((data) => res.json({ data: data }))
    .then((data) => data)
    .catch((err) => console.log(err));
});

app.get('/getuser', (request, response) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getUser();

  result
    .then((data) => {
      try {
        response.json(data ? [...data] : data);
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => console.log(err));
});

app.get('/getpatients', (request, response) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getPatients();

  result
    .then((data) => {
      try {
        response.json(data ? [...data] : data);
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => console.log(err));
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const db = dbService.getDbServiceInstance();
  const result = db.deleteRowById(id);

  result
    .then((data) => res.json({ success: data }))
    .catch((err) => console.log(err));
});

app.patch('/update', (req, res) => {
  const { id, update, input } = req.body;
  const db = dbService.getDbServiceInstance();
  const result = db.editRowById(id, update, input);

  result
    .then((data) => res.json({ success: data }))
    .catch((err) => console.log(err));
});
const dirname = path.resolve();
app.use(express.static(path.join(dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(dirname, '/client/build/index.html'))
);

app.listen(process.env.PORT || 5000, () => console.log('App is running'));
