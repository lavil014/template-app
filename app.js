const express = require('express');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

const transporter = nodeMailer.createTransport(
  {
    service:'gmail',
    auth: {
    user:'lavilesherrera014@gmail.com',
    pass:'',
   }
  }
);