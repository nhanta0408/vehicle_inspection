import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import CircleBar from './CircleBar';
import CustomButton from './CustomButton';
import IllustrationView from './IllustrationView';
import {createStackNavigator} from '@react-navigation/stack';

const InteractionArea = ({navigation}) => {
  const [isFinished, setIsFinished] = useState([false, false, false, false]);
  var onPress = number => {
    // setIsFinished(() => {
    //   var newList = [...isFinished];
    //   newList[number - 1] = !newList[number - 1];
    //   return newList;
    // });
    navigation.navigate('CaptureScreen', {number: number});
    console.log(`Pressed vị trí ${number}`);
  };
  return (
    <View style={styles.interactionArea}>
      <CircleBar
        isFinished={[...isFinished]}
        onPressed1={() => {
          onPress(1);
        }}
        onPressed2={() => {
          onPress(2);
        }}
        onPressed3={() => {
          onPress(3);
        }}
        onPressed4={() => {
          onPress(4);
        }}
      />
      <IllustrationView
        onPressed1={() => {
          onPress(1);
        }}
        onPressed2={() => {
          onPress(2);
        }}
        onPressed3={() => {
          onPress(3);
        }}
        onPressed4={() => {
          onPress(4);
        }}
      />
      <View>
        <View style={{height: 10}} />
        <CustomButton
          text="Inspect"
          backgroundColor="gray"
          borderColor="gray"
        />
        <View style={{height: 10}} />
        <CustomButton
          text="Clear"
          backgroundColor="#0000000"
          borderColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  interactionArea: {
    alignItems: 'center',
  },
});

export default InteractionArea;
