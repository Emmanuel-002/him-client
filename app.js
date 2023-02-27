const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const uuid = require('uuid');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post('/register', (request, response) => {
  const { name, email, password, admin } = request.body;
  const id = uuid.v4();
  const db = dbService.getDbServiceInstance();
  const result = db.insertNewName(id, name, email, password, admin);

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

app.post('/additem', (request, response) => {
  const { item, category, description, dateReceived, image } = request.body;
  const id = uuid.v4();
  const db = dbService.getDbServiceInstance();
  const result = db.insertNewItem(
    id,
    item,
    category,
    description,
    dateReceived,
    image
  );

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

//Read
app.get('/login', (request, response) => {
  const db = dbService.getDbServiceInstance();
  const result = db.login();

  result
    .then((data) => response.json([...data]))
    .catch((err) => console.log(err));
});

app.get('/finditem', (request, response) => {
  const db = dbService.getDbServiceInstance();
  const result = db.findItem();

  result
    .then((data) => response.json([...data]))
    .catch((err) => console.log(err));
});

// Update

// Delete
app.delete('/delete/:id', (request, response) => {
  console.log(request.params);
});

app.listen(process.env.PORT, () => console.log('App is running'));

// 41:48
