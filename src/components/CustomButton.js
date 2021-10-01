import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import ScreenRatio from '../ScreenRatio';
const CustomButton = ({borderColor, backgroundColor, text}) => {
  return (
    <Pressable
      style={[
        styles.customButton,
        {borderColor: borderColor, backgroundColor: backgroundColor},
      ]}
      hitSlop={(10, 10, 10, 10)}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    marginTop: 10 * ScreenRatio.ratioHeight,
    width: 200 * ScreenRatio.ratioWidth,
    height: 50 * ScreenRatio.ratioHeight,
    borderRadius: 15 * ScreenRatio.ratioSquare,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 26 * ScreenRatio.ratioSquare,
    color: 'white',
  },
});
