import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomButton = ({
  borderColor = '#000000',
  backgroundColor = '#040899',
  text,
  textColor = 'black',
  width = 200 * ScreenRatio.ratioWidth,
  height = 50 * ScreenRatio.ratioHeight,
  borderRadius = 15 * ScreenRatio.ratioSquare,
  borderWidth = 0,
  iconLeftName = '',
  iconRightName = '',
  iconSize = 30 * ScreenRatio.ratioSquare,
  iconColor = 'black',
  enableRipple = true,
  onPress,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Nunito-Bold',
      fontSize: 26 * ScreenRatio.ratioSquare,
      color: textColor,
    },
  });
  return (
    <View
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        width: width * ScreenRatio.ratioWidth,
        height: height * ScreenRatio.ratioHeight,
        borderRadius: borderRadius * ScreenRatio.ratioSquare,
        borderWidth: borderWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}
        hitSlop={(10, 10, 10, 10)}
        android_ripple={
          enableRipple ? {borderless: true, color: '#00000060'} : null
        }
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
