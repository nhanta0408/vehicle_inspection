import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
const NameCard = () => {
  return (
    <View style={styles.nameCard}>
      <Image
        source={require('../../assets/DriverAvatar.png')}
        style={styles.image}
        resizeMode="contain"></Image>
      <View style={styles.inforView}>
        <View>
          <Text style={styles.fieldTitle}>Name: </Text>
          <Text style={styles.fieldTitle}>ID: </Text>
        </View>
        <View>
          <Text style={styles.fieldValue}>H. Jones </Text>
          <Text style={styles.fieldValue}>D032 </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameCard: {
    width: 310 * ScreenRatio.ratioWidth,
    height: 105 * ScreenRatio.ratioHeight,
    borderRadius: 10 * ScreenRatio.ratioSquare,
    backgroundColor: 'white',
    marginTop: 3 * ScreenRatio.ratioHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    width: 80 * ScreenRatio.ratioSquare,
    height: 80 * ScreenRatio.ratioSquare,
    borderRadius: 160 * ScreenRatio.ratioSquare,
    marginLeft: 15 * ScreenRatio.ratioWidth,
  },
  inforView: {
    width: 150 * ScreenRatio.ratioWidth,
    marginLeft: 38 * ScreenRatio.ratioWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16 * ScreenRatio.ratioSquare,
    marginVertical: 4 * ScreenRatio.ratioHeight,
  },
  fieldValue: {
    fontFamily: 'Nunito',
    fontSize: 16 * ScreenRatio.ratioSquare,
    marginVertical: 4 * ScreenRatio.ratioHeight,
  },
});

export default NameCard;
