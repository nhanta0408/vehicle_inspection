import {initializeApp} from 'firebase/app';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
var RNFS = require('react-native-fs');

export const uploadImageFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAgh-3UQD0rmzlxZyA2UwBTyaKQDr_jbLY',
    authDomain: 'fir-storage-server.firebaseapp.com',
    projectId: 'fir-storage-server',
    storageBucket: 'fir-storage-server.appspot.com',
    messagingSenderId: '590644445522',
    appId: '1:590644445522:web:760cf61e883d30ed14fa8b',
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage();

  for (let index = 1; index < 5; index++) {
    uploadFileUsingUri(
      storage,
      `file:///storage/emulated/0/Android/data/com.vehicle_inspection/files/MyTest${index}.jpg`,
    );
  }

  //console.log('Hinh anh ne ', imageUpload);
};

const uploadFileUsingUri = async (storage, uri) => {
  console.log('Vào Blob');
  const response = await fetch(uri);
  const blob = await response.blob();
  const splitStr = uri.split('/');
  const fileName = splitStr[splitStr.length - 1];
  const storageRef = ref(storage, `images/${fileName}`);
  uploadBytes(storageRef, blob).then(snapshot => {
    console.log(`Uploaded ${fileName}!`);
  });
};
