import React from 'react';

import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenRatio from '../ScreenRatio';
import CustomButton from './CustomButton';

const CameraUtilities = ({navigation, onPressCapture, number}) => {
  return (
    <View
      style={{
        width: ScreenRatio.ratioWidth * 360,
        flex: 1,
        alignSelf: 'stretch',
      }}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.pop()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45 * ScreenRatio.ratioSquare}
            color="white"
          />
        </Pressable>
      </View>
      <View style={{flex: 18, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={
            number >= 3
              ? require('../../assets/captureFrame.png')
              : require('../../assets/captureFrameRect.png')
          }
          style={styles.guidelineImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.buttonCapture}
          onPress={onPressCapture}
          android_ripple={{borderless: true, color: '#000000FF'}}>
          <View style={styles.insideCircle}></View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2,
    paddingVertical: 5 * ScreenRatio.ratioSquare,
    width: '100%',
    backgroundColor: '#0000005F',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    flex: 4,
    backgroundColor: '#0000005F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCapture: {
    height: 80 * ScreenRatio.ratioSquare,
    width: 80 * ScreenRatio.ratioSquare,
    borderRadius: 40 * ScreenRatio.ratioSquare,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  insideCircle: {
    marginTop: 8 * ScreenRatio.ratioSquare,
    height: 64 * ScreenRatio.ratioSquare,
    width: 64 * ScreenRatio.ratioSquare,
    borderRadius: 30 * ScreenRatio.ratioSquare,
    backgroundColor: 'white',
    borderWidth: 4 * ScreenRatio.ratioSquare,
    borderColor: '#bdbdbd',
  },
  guidelineImage: {
    height: 300 * ScreenRatio.ratioSquare,
    width: 300 * ScreenRatio.ratioSquare,
  },
});

export default CameraUtilities;
