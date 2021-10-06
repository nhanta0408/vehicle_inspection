import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CameraUtilities from '../components/CameraUtilities';
import CaptureReviewScreen from './CaptureReviewScreen';

const CaptureScreen = ({navigation, route}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const [image, setImage] = useState(null);

  const captureHandle = async () => {
    try {
      console.log('Nhảy vào trước khi lưu ảnh data');
      const data = await takePicture();
      setImage(data);
      console.log(data.uri);
      navigation.navigate('CaptureReviewScreen', {
        imageUri: data.uri,
        number: route.params.number,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button
        title="Chuyen screen"
        onPress={() => {
          navigation.pop();
        }}
      /> */}
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
        playSoundOnCapture={true}>
        <CameraUtilities
          navigation={navigation}
          onPressCapture={captureHandle}
          number={route.params.number}
        />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
});

export default CaptureScreen;
