import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAgh-3UQD0rmzlxZyA2UwBTyaKQDr_jbLY',
  authDomain: 'fir-storage-server.firebaseapp.com',
  projectId: 'fir-storage-server',
  storageBucket: 'fir-storage-server.appspot.com',
  messagingSenderId: '590644445522',
  appId: '1:590644445522:web:760cf61e883d30ed14fa8b',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {storage, firebase as default};
