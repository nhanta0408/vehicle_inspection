import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CircleBar = ({
  onPressed1,
  onPressed2,
  onPressed3,
  onPressed4,
  isFinished,
}) => {
  return (
    <View style={styles.circleBarView}>
      <CircleButton
        number="1"
        onPressed={onPressed1}
        isFinished={isFinished[0]}
      />
      <ConnectionStrike />
      <CircleButton
        number="2"
        onPressed={onPressed2}
        isFinished={isFinished[1]}
      />
      <ConnectionStrike />
      <CircleButton
        number="3"
        onPressed={onPressed3}
        isFinished={isFinished[2]}
      />
      <ConnectionStrike />
      <CircleButton
        number="4"
        onPressed={onPressed4}
        isFinished={isFinished[3]}
      />
    </View>
  );
};

export default CircleBar;

const CircleButton = ({number, isFinished, onPressed}) => {
  return (
    <Pressable
      onPress={onPressed}
      hitSlop={(10, 10, 10, 10)}
      android_ripple={{
        borderless: true,
        color: '#00000060',
        radius: 40,
      }}>
      <View style={styles.circleView}>
        {isFinished ? (
          <MaterialCommunityIcons
            name="check-circle"
            size={40 * ScreenRatio.ratioSquare}
            color="#64DD17"
          />
        ) : (
          <Text style={styles.circleNumber}>{number}</Text>
        )}
      </View>
    </Pressable>
  );
};
const ConnectionStrike = () => {
  return <View style={styles.connectionStrike}></View>;
};
const styles = StyleSheet.create({
  circleBarView: {
    flexDirection: 'row',
    marginTop: 25 * ScreenRatio.ratioHeight,
    alignItems: 'center',
  },
  circleView: {
    width: 43 * ScreenRatio.ratioSquare,
    height: 43 * ScreenRatio.ratioSquare,
    borderRadius: 43 * ScreenRatio.ratioSquare,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleNumber: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20 * ScreenRatio.ratioSquare,
  },
  connectionStrike: {
    backgroundColor: 'white',
    height: 2 * ScreenRatio.ratioHeight,
    width: 36 * ScreenRatio.ratioWidth,
  },
});
