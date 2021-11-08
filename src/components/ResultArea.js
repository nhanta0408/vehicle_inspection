import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import CustomButton from './CustomButton';
import ResultRow from './ResultRow';
import {useSelector, useDispatch} from 'react-redux';
import {inspect_finish} from '../redux/inspectReducers/inspectActions';

const ResultArea = ({isSuccessfullArr}) => {
  const dispatch = useDispatch();
  console.log('Sau khi lấy về từ server: ', isSuccessfullArr);
  return (
    <View style={styles.resultArea}>
      <Text style={styles.title}>RESULT</Text>
      <ResultRow
        text="1. Left Front Light"
        isSuccessful={isSuccessfullArr[0]}
      />
      <ResultRow
        text="2. Right Front Light"
        isSuccessful={isSuccessfullArr[1]}
      />
      <ResultRow text="3. Left Tire" isSuccessful={isSuccessfullArr[2]} />
      <ResultRow text="4. Right Tire" isSuccessful={isSuccessfullArr[3]} />
      <View style={{height: 40 * ScreenRatio.ratioHeight}}></View>
      <CustomButton
        text="Finish"
        backgroundColor="white"
        textColor={'#009FDF'}
        enableRipple={true}
        onPress={() => {
          dispatch(inspect_finish());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultArea: {
    marginTop: 15 * ScreenRatio.ratioHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: 310 * ScreenRatio.ratioWidth,
  },
  title: {
    fontSize: 36 * ScreenRatio.ratioSquare,
    fontFamily: 'Nunito-ExtraBold',
    color: 'white',
  },
});

export default ResultArea;
