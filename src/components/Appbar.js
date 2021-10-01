import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScreenRatio from '../ScreenRatio';

const Appbar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.text}>Vehicle Inspection</Text>
      <MaterialIcons name="menu" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 57,
    width: '100%',
    backgroundColor: '#00000000', //transparent
    paddingLeft: 25 * ScreenRatio.ratioWidth,
    paddingRight: 15 * ScreenRatio.ratioWidth,
    paddingVertical: 15 * ScreenRatio.ratioHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
});

export default Appbar;