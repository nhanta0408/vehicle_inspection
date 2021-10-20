const admin = require('firebase-admin');

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require('./permissions.json')),
  storageBucket: 'fir-storage-server.appspot.com',
});
// Cloud storage
const bucket = admin.storage().bucket();

module.exports = {
  admin,
  bucket,
};
