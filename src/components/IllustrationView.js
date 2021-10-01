import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import ScreenRatio from '../ScreenRatio';
const IllustrationView = ({onPressed1, onPressed2, onPressed3, onPressed4}) => {
  return (
    <View style={styles.illustrationView}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/school-bus-transparent.png')}
        resizeMode="contain">
        <View style={{width: '50%', height: '100%'}}>
          <PositionButton
            title="1. Left front light"
            marginTop={50}
            onPress={onPressed1}
          />
          <PositionButton
            title="3. Left tyre"
            marginTop={20}
            marginLeft={30}
            onPress={onPressed3}
          />
        </View>
        <View style={{width: '50%', height: '100%'}}>
          <PositionButton
            title="2. Right front light"
            marginTop={45}
            marginLeft={30}
            onPress={onPressed2}
          />
          <PositionButton
            title="4. Right tyre"
            marginTop={30}
            marginLeft={60}
            onPress={onPressed4}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default IllustrationView;
const PositionButton = ({
  title,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.positionButton,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
        },
      ]}>
      <Pressable
        onPress={onPress}
        android_ripple={{borderless: true, color: '#00000060'}}>
        <Text style={styles.textPositionButton}>{title}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  illustrationView: {
    marginTop: 30 * ScreenRatio.ratioHeight,
    width: 330 * ScreenRatio.ratioWidth,
    height: 140 * ScreenRatio.ratioHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    height: 140 * ScreenRatio.ratioHeight,
    width: '100%',
    flexDirection: 'row',
  },
  positionButton: {
    height: 26 * ScreenRatio.ratioHeight,
    backgroundColor: 'white',
    borderRadius: 5 * ScreenRatio.ratioSquare,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  textPositionButton: {
    paddingHorizontal: 7 * ScreenRatio.ratioWidth,
    fontFamily: 'Nunito-Bold',
    fontSize: 14 * ScreenRatio.ratioSquare,
  },
});
