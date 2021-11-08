import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import CircleBar from './CircleBar';
import CustomButton from './CustomButton';
import IllustrationView from './IllustrationView';
import {createStackNavigator} from '@react-navigation/stack';
import {AppColor} from '../value';
import {useSelector, useDispatch} from 'react-redux';
import {clearIsFinishedArr} from '../redux/finishedReducers/isFinishedActions';
import {inspect_request} from '../redux/inspectReducers/inspectActions';
import {uploadImage} from '../service/upload_image';
import RNFS from 'react-native-fs';
import {uploadImageFirebase} from '../service/upload_image_firebase';

const InteractionArea = ({navigation}) => {
  //const [isFinished, setIsFinished] = useState([false, false, false, false]);
  const isFinished = useSelector(
    state => state.isFinishedReducer,
  ).isFinishedArr;
  const dispatch = useDispatch();

  const checkIsAllFinished = isFinished => {
    let result = true;
    isFinished.forEach(element => {
      result = result && element;
    });
    console.log('result là: ', result);
    return result;
  };

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
      {console.log(isFinished)}
      <CircleBar
        //isFinished={[false, false, false, false]}
        isFinished={isFinished}
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
          text="INSPECT"
          backgroundColor={checkIsAllFinished(isFinished) ? 'white' : 'gray'}
          textColor={
            checkIsAllFinished(isFinished) ? AppColor.primaryColor : 'white'
          }
          enableRipple={checkIsAllFinished(isFinished)}
          onPress={() => {
            // checkIsAllFinished(isFinished) ? uploadImageFirebase() : null;
            console.log('Nhấn nút');
            dispatch(inspect_request());
          }}
        />
        <View style={{height: 10}} />
        <CustomButton
          text="CLEAR"
          backgroundColor="#0000000"
          borderWidth={2}
          borderColor="white"
          textColor="white"
          onPress={() => {
            dispatch(clearIsFinishedArr());
          }}
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
