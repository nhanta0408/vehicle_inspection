const SERVER_URL = 'http://192.168.1.8:3001';
//const SERVER_URL = 'https://7990-115-76-156-37.ngrok.io';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export const uploadImage = file => {
  let body = new FormData();
  for (let index = 1; index < 5; index++) {
    let sourcePhoto = {
      name: `MyTest${index}.jpg`,
      type: 'image/jpg',
      uri: `file:///storage/emulated/0/Android/data/com.vehicle_inspection/files/MyTest${index}.jpg`,
    };
    body.append('photo', sourcePhoto, sourcePhoto.uri);
    console.log('Source photo', sourcePhoto); //log ra để kiểm tra name type uri
  }
  body.append('user', 'name'); //send json này để test xem đã pass được http chưa
  let header = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data;',
  };
  fetch(`${SERVER_URL}/upload`, {
    method: 'POST',
    body: body,
    header: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data;',
    },
  })
    .then(response => response.json())
    .then(response => {
      console.log('response', response);
    })
    .catch(error => {
      console.log('error', error);
    });
};
