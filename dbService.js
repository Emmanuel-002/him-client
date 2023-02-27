const mysql = require('mysql');
const dotenv = require('dotenv');
const uuid = require('uuid');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});
// const connection = mysql.createConnection({
//   host: process.env.ONLINE_HOST,
//   user: process.env.ONLINE_USER,
//   password: process.env.ONLINE_PASSWORD,
//   database: process.env.ONLINE_DATABASE,
//   port: process.env.ONLINE_PORT,
// });

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`db ${connection.state}`);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getUser() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users';
        connection.query(query, (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async insertNewUser(id, firstName, middleName, surname, email, password) {
    try {
      await new Promise((resolve, reject) => {
        const query =
          'INSERT IGNORE INTO users (id,firstName,middleName,surname,email,password) VALUES (?,?,?,?,?,?);';
        connection.query(
          query,
          [id, firstName, middleName, surname, email, password],
          (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(result.insertId);
          }
        );
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getPatients() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM patients';
        connection.query(query, (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async insertNewPatient(
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
  ) {
    try {
      await new Promise((resolve, reject) => {
        const query =
          'INSERT IGNORE INTO patients (id, title, serviceNumber, personalFirstName, personalMiddleName, personalSurname, personalGender, placeOfOrigin, tribe, trade, dateOfBirth, maritalStatus, religion, personalPhoneNumber, personalEmail, personalCurrentAddress, personalPermanentAddress, unit, nextOfKinFirstName, nextOfKinMiddleName, nextOfKinSurname, nextOfKinAddress, nextOfKinPhoneNumber, nextOfKinEmail, relationship, nextOfKinGender, date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        connection.query(
          query,
          [
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
            date,
          ],
          (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(result.insertId);
          }
        );
      });
    } catch (err) {
      console.log(err);
    }
  }
  async deleteRowById(id) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM patients WHERE id = ?';
        connection.query(query, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return response === 1 ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async editRowById(id, update, input) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `UPDATE patients SET ${update} = ? WHERE id = ?`;
        connection.query(query, [input, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return response === 1 ? true : false;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = DbService;
