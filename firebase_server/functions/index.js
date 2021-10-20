const functions = require('firebase-functions');

const admin = require('firebase-admin');

var serviceAccount = require('./permissons.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');
app.use(cors({origin: true}));
app.get('/hello-world', (req, res) => {
  console.log('ACK  ');

  return res.status(200).send('HelloWorld!');
});

app.post('/create', (req, res) => {
  console.log('Resquest price: ', req.body.price);
  async () => {
    try {
      await db
        .collection('product')
        .doc('/' + req.body.id + '/')
        .create({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
        });
      return res.status(200).send('Successed');
    } catch (error) {
      return res.status(500).send(error);
    }
  };
});

exports.app = functions.https.onRequest(app);
