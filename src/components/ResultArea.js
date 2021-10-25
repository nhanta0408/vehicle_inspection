import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import CustomButton from './CustomButton';
import ResultRow from './ResultRow';

const ResultArea = ({navigation}) => {
  return (
    <View style={styles.resultArea}>
      <Text style={styles.title}>RESULT</Text>
      <ResultRow text="1. Left Front Light" isSuccesful={true} />
      <ResultRow text="2. Right Front Light" isSuccesful={true} />
      <ResultRow text="3. Left Tire" isSuccesful={false} />
      <ResultRow text="4. Right Tire" isSuccesful={true} />
      <View style={{height: 40 * ScreenRatio.ratioHeight}}></View>
      <CustomButton
        text="Finish"
        backgroundColor="white"
        textColor={'#009FDF'}
        enableRipple={true}
        onPress={() => {}}
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
