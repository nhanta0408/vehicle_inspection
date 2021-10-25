import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ResultRow = ({text = '1. Input content here', isSuccesful = false}) => {
  return (
    <View style={styles.resultRowView}>
      <Text style={styles.text}>{text}</Text>
      {isSuccesful ? (
        <MaterialCommunityIcons
          name="check-circle"
          size={24 * ScreenRatio.ratioSquare}
          color="#64DD17"
        />
      ) : (
        <MaterialIcons
          name="cancel"
          size={24 * ScreenRatio.ratioSquare}
          color="#d50000"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultRowView: {
    marginTop: 10 * ScreenRatio.ratioHeight,
    paddingHorizontal: 20 * ScreenRatio.ratioWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10 * ScreenRatio.ratioSquare,
    height: 40 * ScreenRatio.ratioWidth,
    width: 310 * ScreenRatio.ratioWidth,
  },
  text: {
    fontSize: 16 * ScreenRatio.ratioSquare,
    fontFamily: 'Nunito-ExtraBold',
    color: 'black',
  },
});
export default ResultRow;
