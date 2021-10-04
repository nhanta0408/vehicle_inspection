import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomButton = ({
  borderColor = '#000000',
  backgroundColor = '#040899',
  text,
  width = 200,
  height = 50,
  borderRadius = 15,
  borderWidth = 2,
  iconLeftName = '',
  iconRightName = '',
  iconSize = 30,
  iconColor = 'black',
  onPress,
}) => {
  return (
    <View
      style={[
        styles.customButton,
        {
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          width: width * ScreenRatio.ratioWidth,
          height: height * ScreenRatio.ratioHeight,
          borderRadius: borderRadius * ScreenRatio.ratioSquare,
          borderWidth: borderWidth,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Pressable
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}
        hitSlop={(10, 10, 10, 10)}
        android_ripple={{borderless: true, color: '#00000060'}}
        onPress={onPress}>
        {iconLeftName != '' ? (
          <MaterialCommunityIcons
            name={iconLeftName}
            size={iconSize * ScreenRatio.ratioSquare}
            color={iconColor}
          />
        ) : null}
        <Text style={styles.text}>{text}</Text>
        {iconRightName != '' ? (
          <MaterialCommunityIcons
            name={iconRightName}
            size={iconSize * ScreenRatio.ratioSquare}
            color={iconColor}
          />
        ) : null}
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 26 * ScreenRatio.ratioSquare,
    color: 'white',
  },
});
