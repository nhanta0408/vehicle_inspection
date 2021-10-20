import {storage} from './firebase';

export const uploadImageFirebase = () => {
  let index = 1;
  let sourcePhoto = {
    name: `MyTest${index}.jpg`,
    type: 'image/jpg',
    uri: `file:///storage/emulated/0/Android/data/com.vehicle_inspection/files/MyTest${index}.jpg`,
  };
  const uploadTask = storage.ref('MyTestFB_1.png').put(sourcePhoto);
  uploadTask.on(
    'state_changed',
    snapshot => {
      console.log('Uploading');
    },
    error => {
      console.log('error: ', error);
    },
    () => {
      console.log('Upload successfully');
    },
  );
};
