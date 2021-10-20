const express = require('express');
const multer = require('multer');
const firebase = require('./firebase');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

const upload = multer({
  storage: multer.memoryStorage(),
});
const numberOfFiles = 2;

app.post('/upload', upload.array('photo', numberOfFiles), (req, res) => {
  console.log(req.files);
  if (!req.files[0]) {
    return res.status(400).send('Error: No files found');
  }
  let successfulUpload = true;
  for (let index = 0; index < numberOfFiles; index++) {
    let file = req.files[index];
    console.log('File: ', file);
    const blob = firebase.bucket.file(file.originalname);
    const blobWriter = blob.createWriteStream({
      metadata: {
        //contentType: file.mimetype,
        contentType: 'image/jpeg',
      },
    });
    blobWriter.on('error', err => {
      console.log(err);
      successfulUpload = successfulUpload & false;
    });
    blobWriter.on('finish', () => {
      successfulUpload = successfulUpload & true;
    });
    blobWriter.end(file.buffer);
  }
  if (successfulUpload) {
    res.status(200).send('File uploaded.');
  } else {
    res.status(500).send('Internal Error');
  }
});

app.listen(3001, () => {
  console.log('🚀Server listening on port 3001');
});
