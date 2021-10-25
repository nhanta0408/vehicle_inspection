import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import ScreenRatio from '../ScreenRatio';

const LoadingArea = () => {
  return (
    <View style={styles.loadingArea}>
      <ActivityIndicator size={80 * ScreenRatio.ratioWidth} color="white" />
      <Text style={styles.title}>Please wait ...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loadingArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 310 * ScreenRatio.ratioWidth,
  },
  title: {
    marginTop: 20 * ScreenRatio.ratioHeight,
    marginBottom: 70 * ScreenRatio.ratioHeight,
    fontSize: 30 * ScreenRatio.ratioSquare,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
});

export default LoadingArea;
